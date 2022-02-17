import { useState, useEffect } from "react";
import PokeLeft from "../../components/PokeLeft";
import PokeRight from "../../components/PokeRight";
import styled from "styled-components";
import axios from "axios";
let Screen = styled.div``;
let Light = styled.div``;

const PokedexTemplate = () => {
  // 1-
  const [isOn, setIsOn] = useState(false);
  const [tag, setTag] = useState("On");
  const [placeholder, setPlaceholder] = useState("");
  const [list, setList] = useState([]);
  const [viewList, setViewList] = useState("");
  let [position, setPosition] = useState(0);
  const pxList = -58;
  let [numTop, setNumTop] = useState(0);
  let [topScroll, setTopScroll] = useState("0px");
  let [selected, setSelected] = useState({
    borderStyle: `solid`,
    borderColor: `black`,
    top: `${topScroll}`,
  });
  let [noSelected, setNoSelected] = useState({
    borderStyle: `dashed`,
    top: `${topScroll}`,
  });
  let [namePokemon, setNamePokemon] = useState("");

  //2- Turn on and turn off
  function changeIsOn() {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }

  //3- Array list of Pokemon
  useEffect(() => {
    axios({
      url: "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0",
    })
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [list]);

  //4- move through the list
  //4.1- arrow up
  function addPosition() {
    if (isOn) {
      if (position == 0) {
        //   setPosition(list.length - 1);
        //   setNumTop(-58 * list.length * -1);
      } else {
        position--;
        setPosition(position);
        setNumTop(position * pxList);
        // setNumTop(numTop + pxList);
      }
    }
  }
  //4.2- arrow up
  function subtractPosition() {
    if (isOn) {
      if (position == list.length - 1) {
        setPosition(0);
        setNumTop(0);
      } else {
        position++;
        setPosition(position);
        setNumTop(position * pxList);
        // setNumTop(numTop - pxList);
      }
    }
  }

  //Visualize changes
  useEffect(() => {
    switch (isOn) {
      case true:
        setTopScroll(numTop + "px");
        setPlaceholder("Write here");
        setTag("Off");
        Screen = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
        Light = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
        setNamePokemon(list[position].name);
        setViewList(
          list.map((item, index) => {
            list[index].index = index;
            return (
              <div
                id={index}
                key={index}
                className="viewList"
                style={position === index ? selected : noSelected}
              >
                <p>{item.name}</p>
                <p>{item.index}</p>
              </div>
            );
          })
        );
        break;

      default:
        setViewList("");
        setPlaceholder("");
        setTag("On");
        Screen = styled.div`
          background-color: var(--bg-darkgray);
        `;
        Light = styled.div`
          background-color: var(--bg-red);
        `;
        break;
    }
  }, [isOn, position, numTop]);

  useEffect(() => {
    setSelected({
      borderStyle: `solid`,
      borderColor: `black`,
      fontWeight: `bold`,
      top: `${topScroll}`,
    });
    setNoSelected({ borderStyle: `dashed`, top: `${topScroll}` });
  }, [numTop]);

  return (
    <div className="pokeindex">
      <PokeLeft
        tag={tag}
        changeIsOn={changeIsOn}
        placeholder={placeholder}
        viewList={viewList}
        Screen={Screen}
        Light={Light}
        addPosition={addPosition}
        subtractPosition={subtractPosition}
      />
      <div className="pokeindex-middle"></div>
      <PokeRight
        Screen={Screen}
        position={position}
        namePokemon={namePokemon}
      />
    </div>
  );
};
export default PokedexTemplate;

import { useState, useEffect } from "react";
import PokeLeft from "../../components/PokeLeft";
import PokeRight from "../../components/PokeRight";
import styled from "styled-components";
import axios from "axios";

let Screen = styled.div``;
let Light = styled.div``;

const PokedexTemplate = () => {
  const [isOn, setIsOn] = useState(false);
  const [tag, setTag] = useState("On");
  const [placeholder, setPlaceholder] = useState("");
  const [list, setList] = useState([]);
  const [viewList, setViewList] = useState("");
  let [position, setPosition] = useState(0);
  let [numTop, setNumTop] = useState(0);
  let [topScroll, setTopScroll] = useState(numTop + "px");
  let [selected, setSelected] = useState({
    borderStyle: `solid`,
    borderColor: `black`,
    top: `${topScroll}`,
  });
  let [noSelected, setNoSelected] = useState({
    borderStyle: `dashed`,
    top: `${topScroll}`,
  });

  function changeIsOn() {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }

  function addPosition() {
    console.log("antes de sumar");
    console.log(numTop);
    if (isOn) {
      if (position == 0) {
        //   setPosition(list.length - 1);
        //   setNumTop(-58 * list.length * -1);
        console.log("ya estas arriba de la lista.");
      } else {
        position--;
        setPosition(position);
        setNumTop(numTop + 58);
      }
      setTopScroll(numTop + "px");
      console.log("después de sumar");
      console.log(numTop);
    }
  }
  function subtractPosition() {
    console.log("antes de restar");
    console.log(numTop);
    if (isOn) {
      if (position == list.length - 1) {
        console.log("ya estas a bajo de la lista.");
        setPosition(0);
        setNumTop(0);
      } else {
        position++;
        setPosition(position);
        setNumTop(numTop - 58);
      }
      setTopScroll(numTop + "px");
      console.log("después de restar");
      console.log(numTop);
    }
  }

  //Array list of Pokemon
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

  //Visualize changes
  useEffect(() => {
    console.log(isOn);
    console.log(position);
    switch (isOn) {
      case true:
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
        setPlaceholder("Write here");
        setTag("Off");
        Screen = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
        Light = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
        console.log(topScroll);
        setSelected({
          borderStyle: `solid`,
          borderColor: `black`,
          fontWeight: `bold`,
          top: `${topScroll}`,
        });
        setNoSelected({ borderStyle: `dashed`, top: `${topScroll}` });
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

  // useEffect(() => {
  //   setTopScroll(numTop + "px");
  //   console.log(topScroll);
  //   setSelected({
  //     borderStyle: `solid`,
  //     borderColor: `black`,
  //     fontWeight: `bold`,
  //     top: `${topScroll}`,
  //   });
  //   setNoSelected({ borderStyle: `dashed`, top: `${topScroll}` });
  // }, [position, topScroll, numTop]);

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
      <PokeRight Screen={Screen} />
    </div>
  );
};
export default PokedexTemplate;

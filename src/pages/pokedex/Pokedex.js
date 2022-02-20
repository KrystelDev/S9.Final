import { useState, useEffect } from "react";
import PokeLeft from "../../components/PokeLeft";
import PokeRight from "../../components/PokeRight";
import styled from "styled-components";
import axios from "axios";

let Screen = styled.div``;
let Light = styled.div``;

const PokedexTemplate = () => {
  // 1- initialize variables
  const [isOn, setIsOn] = useState(false);
  const [tag, setTag] = useState("On");
  const [placeholder, setPlaceholder] = useState("");
  const [list, setList] = useState([]);
  const [viewList, setViewList] = useState("");
  let [position, setPosition] = useState(0);
  const selected = {
    borderStyle: `solid`,
    borderColor: `black`,
    fontWeight: `bold`,
    top: `${position * -59}px`,
  };
  const noSelected = {
    borderStyle: `dashed`,
    top: `${position * -59}px`,
  };
  // PokeRaight/Screen
  let [namePokemon, setNamePokemon] = useState("");
  let [displayPokemon, setDisplayPokemon] = useState(<div></div>);
  // WritePokedex
  const [encontrar, setEncontrar] = useState();

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
      } else {
        position--;
        setPosition(position);
      }
    }
  }
  //4.2- arrow up
  function subtractPosition() {
    if (isOn) {
      if (position == list.length - 1) {
        setPosition(0);
      } else {
        position++;
        setPosition(position);
      }
    }
  }

  //Visualize changes
  useEffect(() => {
    switch (isOn) {
      case true:
        setPlaceholder("Write here");
        setTag("Off");
        Screen = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
        Light = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
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
        //Reset all on power off
        setTag("On");
        setPlaceholder("");
        setViewList("");
        setPosition(0);
        Screen = styled.div`
          background-color: var(--bg-darkgray);
        `;
        Light = styled.div`
          background-color: var(--bg-red);
        `;
        // PokeRaight/Screen
        setNamePokemon("");
        setDisplayPokemon(<div></div>);
        //WritePokedex
        setEncontrar("");
        break;
    }
  }, [isOn, position]);

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
        list={list}
        setPosition={setPosition}
        encontrar={encontrar}
        setEncontrar={setEncontrar}
        isOn={isOn}
      />
      <div className="pokeindex-middle"></div>
      <PokeRight
        Screen={Screen}
        position={position}
        isOn={isOn}
        list={list}
        namePokemon={namePokemon}
        setNamePokemon={setNamePokemon}
        displayPokemon={displayPokemon}
        setDisplayPokemon={setDisplayPokemon}
      />
    </div>
  );
};
export default PokedexTemplate;

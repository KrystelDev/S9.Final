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

  function changeIsOn() {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }

  useEffect(() => {
    console.log(isOn);
    switch (isOn) {
      case true:
        setViewList(
          list.map((item, index) => (
            <div key={index} className="viewList">
              {item.name}
            </div>
          ))
        );
        setPlaceholder("Write here");
        setTag("Off");
        Screen = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
        Light = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
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
  }, [isOn]);

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

  return (
    <div className="pokeindex">
      <PokeLeft
        tag={tag}
        changeIsOn={changeIsOn}
        placeholder={placeholder}
        viewList={viewList}
        Screen={Screen}
        Light={Light}
      />
      <div className="pokeindex-middle"></div>
      <PokeRight Screen={Screen} />
    </div>
  );
};
export default PokedexTemplate;

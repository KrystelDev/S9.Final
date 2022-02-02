import { Fragment, useState, useEffect } from "react";
import SelectOrNot from "../../components/SelectOrNot";
import JoyStick from "../../components/JoyStick";
import OnOff from "../../components/OnOff";
import styled from "styled-components";

let Screen = styled.div``;
let Light = styled.div``;

const PokedexTemplate = () => {
  const [isOn, setIsOn] = useState(false);
  const [tag, setTag] = useState("On");
  const [placeholder, setPlaceholder] = useState("");

  function changeIsOn() {
    if (isOn) {
      setIsOn(false);
      setTag("On");
    } else {
      setIsOn(true);
      setTag("Off");
      setPlaceholder("Write here");
    }
  }

  useEffect(() => {
    console.log(isOn);
    switch (!isOn) {
      case true:
        Screen = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
        Light = styled.div`
          background-color: var(--bg-lightgreen) !important;
        `;
        break;

      default:
        Screen = styled.div`
          background-color: var(--bg-darkgray);
        `;
        Light = styled.div`
          background-color: var(--bg-red);
        `;
        break;
    }
  }, [isOn]);

  return (
    <Fragment>
      <div className="pokeindex">
        <div className="pokeindex-left">
          <div className="pokeindex-left__top">
            <div className="circle-big"></div>
            <div className="circle-small"></div>
          </div>
          <div className="pokeindex-left__screen">
            <div className="dots">
              <span></span>
              <span></span>
            </div>
            <Screen className="pokeindex-left__screen screen"></Screen>
            <div className="status">
              <Light className="status-light"></Light>
              <div className="status-sound">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="pokeindex-left__buttons">
            <div className="buttons">
              <OnOff tag={tag} changeIsOn={changeIsOn} />
            </div>
            <div className="controller">
              <input
                type="text"
                placeholder={placeholder}
                className="controller-touch"
              ></input>
              <JoyStick />
            </div>
          </div>
        </div>
        <div className="pokeindex-middle"></div>
        <div className="pokeindex-right">
          <Screen className="pokeindex-right__screen"></Screen>
          <div className="pokeindex-right__buttons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="pokeindex-right__buttons-quadruple">
            <div className="dot">
              <span></span>
              <span></span>
            </div>
            <div className="button">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="pokeindex-right__buttons-triple">
            <div className="button">
              <span></span>
              <span></span>
            </div>
            <div className="light"></div>
          </div>
          <SelectOrNot />
        </div>
      </div>
    </Fragment>
  );
};
export default PokedexTemplate;

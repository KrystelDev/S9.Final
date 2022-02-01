import { Fragment } from "react";
import SelectOrNot from "../../components/SelectOrNot";
import JoyStick from "../../components/JoyStick";
import OnOff from "../../components/OnOff";

// Fuente de plantilla Layout : https://codepen.io/alinas_view/pen/OJyKgZW

const PokedexTemplate = () => {
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
            <div className="screen green"></div>
            <div className="status">
              <div className="green"></div>
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
              <OnOff />
              <div className="buttons-quad">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="controller">
              <input
                type="text"
                placeholder="Write here"
                className="controller-touch"
              ></input>
              <JoyStick />
            </div>
          </div>
        </div>
        <div className="pokeindex-middle"></div>
        <div className="pokeindex-right">
          <div className="pokeindex-right__screen green"></div>
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

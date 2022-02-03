import JoyStick from "./JoyStick";
import OnOff from "./OnOff";

const PokeLeft = ({
  tag,
  changeIsOn,
  viewList,
  placeholder,
  Screen,
  Light,
}) => {
  return (
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
        <Screen className="pokeindex-left__screen screen">{viewList}</Screen>
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
  );
};

export default PokeLeft;

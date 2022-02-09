import SelectOrNot from "./SelectOrNot";

const PokeRight = ({ Screen }) => {
  return (
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
  );
};

export default PokeRight;

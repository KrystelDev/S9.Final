import { Link } from "react-router-dom";

const SelectOrNot = ({ viewDisplayPokemon }) => {
  return (
    <div className="pokeindex-right__buttons-double">
      <button type="button" onClick={viewDisplayPokemon}>
        Select
      </button>
      <Link to="/">
        <button>Exit</button>
      </Link>
    </div>
  );
};

export default SelectOrNot;

const SelectOrNot = ({ viewDisplayPokemon }) => {
  // function only when isOn === true (context)

  return (
    <div className="pokeindex-right__buttons-double">
      <button type="button" onClick={viewDisplayPokemon}>
        Select
      </button>
      <button>List</button>
    </div>
  );
};

export default SelectOrNot;

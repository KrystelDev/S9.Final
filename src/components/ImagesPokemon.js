const ImagesPokemon = ({ image, pokemon }) => {
  let small = {
    objectFit: `none`,
  };
  let big = {
    objectFit: `contain`,
  };

  return <img src={image} style={pokemon.height / 100 < 0.11 ? small : big} />;
};

export default ImagesPokemon;

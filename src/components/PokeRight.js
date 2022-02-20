import axios from "axios";
import { useEffect, useState } from "react";
import SelectOrNot from "./SelectOrNot";
import ImagesPokemon from "./ImagesPokemon";

const PokeRight = ({
  Screen,
  position,
  isOn,
  list,
  namePokemon,
  setNamePokemon,
  displayPokemon,
  setDisplayPokemon,
}) => {
  // Data pokemon Selected
  const baseDataURL = "https://pokeapi.co/api/v2/pokemon/";
  const completedDataUR = baseDataURL + namePokemon;
  let [pokemon, setPokemon] = useState();

  //IMAGES
  //front:
  const baseImgFrontURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const [completedImgFrontURL, setCompletedImgFrontURL] = useState();
  //Back:
  const baseImgBackURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";
  const [completedImgBackURL, setCompletedImgBackURL] = useState();
  //ShinyFront
  const baseImgShinyFrontURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
  const [completedImgShinyFrontURL, setCompletedImgShinyFrontURL] = useState();
  //ShinyBack
  const baseImgShinyBacktURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/";
  const [completedImgShinyBackURL, setCompletedImgShinyBackURL] = useState();

  // Onclick Button Select
  function viewDisplayPokemon() {
    console.log("posició igual: ");
    console.log(position);
    console.log("list[position].name igual: ");
    console.log(list[position].name);
    setNamePokemon(list[position].name);
  }

  //Selected images
  useEffect(() => {
    console.log("completedDataUR : ");
    console.log(completedDataUR);
    axios({
      url: completedDataUR,
    })
      .then((response) => {
        setCompletedImgFrontURL(baseImgFrontURL + response.data.id + ".png");
        setCompletedImgBackURL(baseImgBackURL + response.data.id + ".png");
        setCompletedImgShinyFrontURL(
          baseImgShinyFrontURL + response.data.id + ".png"
        );
        setCompletedImgShinyBackURL(
          baseImgShinyBacktURL + response.data.id + ".png"
        );
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [namePokemon]);

  //Display the Pokemon
  useEffect(() => {
    console.log("Pokemon: ");
    console.log(pokemon);
    if (isOn) {
      setDisplayPokemon(
        <div className="screen">
          <p className="name">{pokemon.name}</p>
          <div className="imgOther">
            <ImagesPokemon image={completedImgFrontURL} />
            <ImagesPokemon image={completedImgBackURL} />
            <ImagesPokemon image={completedImgShinyFrontURL} />
            <ImagesPokemon image={completedImgShinyBackURL} />
          </div>
          <div className="divTable">
            <table>
              <tbody>
                <tr>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Type</th>
                </tr>
                <tr>
                  <td>
                    <sup>{pokemon.height / 100} m</sup>
                  </td>
                  <td>
                    <sup>{pokemon.weight / 10} kg</sup>
                  </td>
                  <td className="types">
                    {pokemon.types.map((item, index) => {
                      return (
                        <sup key={index} className="type">
                          {item.type.name}
                        </sup>
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }, [pokemon]);

  return (
    <div className="pokeindex-right">
      <Screen className="pokeindex-right__screen">{displayPokemon}</Screen>
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
      <SelectOrNot viewDisplayPokemon={viewDisplayPokemon} />
    </div>
  );
};

export default PokeRight;

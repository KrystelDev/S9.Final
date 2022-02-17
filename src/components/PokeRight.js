import axios from "axios";
import { useEffect, useState } from "react";
import SelectOrNot from "./SelectOrNot";

const PokeRight = ({ Screen, position, namePokemon }) => {
  // Selected the pokemon
  let [positionPokemon, setPositionPokemon] = useState(-1);
  let [displayPokemon, setDisplayPokemon] = useState(<div></div>);
  // Data pokemon Selected
  const baseDataURL = "https://pokeapi.co/api/v2/pokemon/";
  const completedDataUR = baseDataURL + namePokemon;
  const [pokemon, setPokemon] = useState();
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

  //Selected view display
  function viewDisplayPokemon() {
    setPositionPokemon(1 + position);
  }

  //Selected images
  useEffect(() => {
    axios({
      url: completedDataUR,
    })
      .then((response) => {
        setPokemon(response.data);
        setCompletedImgFrontURL(baseImgFrontURL + response.data.id + ".png");
        setCompletedImgBackURL(baseImgBackURL + response.data.id + ".png");
        setCompletedImgShinyFrontURL(
          baseImgShinyFrontURL + response.data.id + ".png"
        );
        setCompletedImgShinyBackURL(
          baseImgShinyBacktURL + response.data.id + ".png"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setPokemon]);

  //Display the Pokemon
  useEffect(() => {
    if (pokemon) {
      setDisplayPokemon(
        <div className="screen">
          <div>
            <p className="name">{pokemon.name}</p>
          </div>
          <div className="images">
            <div className="imgFront">
              <img src={completedImgFrontURL} />
            </div>
            <div className="imgOther">
              <img src={completedImgBackURL} />
              <img src={completedImgShinyFrontURL} />
              <img src={completedImgShinyBackURL} />
            </div>
          </div>
          <div>
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
                  <td>
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
  }, [positionPokemon]);

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

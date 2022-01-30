import { Fragment } from "react";
import { Link } from "react-router-dom";

// Layout inspirado en : https://codepen.io/alinas_view/pen/OJyKgZW

const PokedexTemplate = () => {
  return (
    <Fragment>
      <Link to="/OpenOff">
        <div class="pokeindex">
          <div class="pokeindex-left">
            <div class="pokeindex-left__top">
              <div class="circle-big"></div>
              <div class="circle-small"></div>
            </div>
            <div class="pokeindex-left__screen">PORTADA</div>
          </div>
          <div class="pokeindex-middle"></div>
        </div>
      </Link>
    </Fragment>
  );
};
export default PokedexTemplate;

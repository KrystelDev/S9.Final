import { Fragment } from "react";
import { Link } from "react-router-dom";

// Layout inspirado en : https://codepen.io/alinas_view/pen/OJyKgZW

const PokedexTemplate = () => {
  return (
    <Fragment>
      <Link to="/Open">
        <div className="pokeindex">
          <div className="pokeindex-left">
            <div className="pokeindex-left__top">
              <div className="circle-big"></div>
              <div className="circle-small"></div>
            </div>
            <div className="pokeindex-left__screen">PORTADA</div>
          </div>
          <div className="pokeindex-middle"></div>
        </div>
      </Link>
    </Fragment>
  );
};
export default PokedexTemplate;

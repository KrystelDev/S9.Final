import { Fragment } from "react";

// Fuente de plantilla Layout : https://codepen.io/alinas_view/pen/OJyKgZW

const PokedexTemplate = () => {
  return (
    <Fragment>
      <div class="pokeindex">
        <div class="pokeindex-left">
          <div class="pokeindex-left__top">
            <div class="circle-big"></div>
            <div class="circle-small"></div>
          </div>
          <div class="pokeindex-left__screen">
            <div class="dots">
              <span></span>
              <span></span>
            </div>
            <div class="screen"></div>
            <div class="status">
              <div class="status-light"></div>
              <div class="status-sound">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="pokeindex-left__buttons">
            <div class="buttons">
              <div class="buttons-circle"></div>
              <div class="buttons-quad">
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="controller">
              <div class="controller-touch"></div>
              <div class="controller-joystick"></div>
            </div>
          </div>
        </div>
        <div class="pokeindex-middle"></div>
        <div class="pokeindex-right">
          <div class="pokeindex-right__screen"></div>
          <div class="pokeindex-right__buttons">
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
          <div class="pokeindex-right__buttons-quadruple">
            <div class="dot">
              <span></span>
              <span></span>
            </div>
            <div class="button">
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="pokeindex-right__buttons-triple">
            <div class="button">
              <span></span>
              <span></span>
            </div>
            <div class="light"></div>
          </div>
          <div class="pokeindex-right__buttons-double">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PokedexTemplate;

import { Fragment } from "react";
import { Link } from "react-router-dom";

const PokedexTemplate = () => {
  return (
    <Fragment>
      <div className="pokeindex">
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
            <div className="screen gray"></div>
            <div className="status">
              <div className="status-light"></div>
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
              <Link to="/OpenOn" className="On-Off">
                <div className="buttons-circle">
                  <p>On</p>
                </div>
              </Link>
              <div className="buttons-quad">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="controller">
              <div className="controller-touch"></div>
              <div class="joy-stick">
                <button class="left">
                  <i></i>
                </button>
                <button class="top">
                  <i></i>
                </button>
                <button class="right">
                  <i></i>
                </button>
                <button class="bottom">
                  <i></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pokeindex-middle"></div>
        <div className="pokeindex-right">
          <div className="pokeindex-right__screen"></div>
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
          <div className="pokeindex-right__buttons-double">
            <button>Select</button>
            <button>List</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PokedexTemplate;

import { Fragment, useState, useEffect } from "react";
import Search from "../img/Search.png";

const WritePokedex = ({
  placeholder,
  list,
  setPosition,
  encontrar,
  setEncontrar,
  isOn,
}) => {
  let [lookForWrite, setLookForWrite] = useState("");

  /* Saber si existe el nombre en la lista:
        setLookForWrite(e.target.value)
        useEffect (paramatre lookforwrite)..
          setEncontrar(list.indexOf({lookForWrite.name}))
          - Si existe:
                if (encontrar > -1) {
              setPosition(encontrar)
                 } else {
     - No existe:
            Mostrar mensaje: ...
    } */

  function search() {
    if (list) {
      setEncontrar(list.findIndex((i) => i.name == lookForWrite));
    }
  }

  useEffect(() => {
    if (isOn) {
      if (encontrar > -1) {
        setPosition(encontrar);
      } else {
        console.log("No existe");
      }
    }
  }, [encontrar]);

  return (
    <Fragment>
      <input
        type="text"
        placeholder={placeholder}
        className="controller-touch"
        value={lookForWrite}
        onChange={(e) => {
          setLookForWrite(e.target.value);
        }}
      ></input>
      <button>
        <img src={Search} onClick={search} />
      </button>
    </Fragment>
  );
};

export default WritePokedex;

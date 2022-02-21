import { Fragment, useState, useEffect } from "react";
import Search from "../img/Search.png";

const WritePokedex = ({
  placeholder,
  list,
  setPosition,
  encontrar,
  setEncontrar,
  lookForWrite,
  setLookForWrite,
}) => {
  const [warning, setWarning] = useState(false);
  const messWarning = <div className="warning">* No encontrado</div>;

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

  const search = (e) => {
    e.preventDefault();
    if (list) {
      setEncontrar(list.findIndex((i) => i.name == lookForWrite));
    }
  };

  useEffect(() => {
    if (encontrar > -1) {
      setWarning(false);
      setPosition(encontrar);
    } else {
      setWarning(true);
      console.log("No existe");
    }
  }, [encontrar]);

  return (
    <Fragment>
      {warning && messWarning}
      <input
        type="text"
        placeholder={placeholder}
        className="controller-touch"
        value={lookForWrite}
        onChange={(e) => {
          setLookForWrite(e.target.value);
        }}
      ></input>
      <button type="submit" onClick={search}>
        <img src={Search} alt="seacrh" />
      </button>
    </Fragment>
  );
};

export default WritePokedex;

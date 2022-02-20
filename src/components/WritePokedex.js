import { Fragment, useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

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

  useEffect(() => {
    if (list) {
      setEncontrar(list.findIndex((i) => i.name == lookForWrite));
    }
  }, [lookForWrite]);

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
        <SearchIcon color="default" />
      </button>
    </Fragment>
  );
};

export default WritePokedex;

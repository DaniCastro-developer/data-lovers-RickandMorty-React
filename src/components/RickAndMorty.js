import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getDataAccion, nextPageDataAccion } from "../REDUX/rickDucks";

const RickAndMorty = () => {
  const dispatch = useDispatch();

  const readData = useSelector((store) => store.rickAndMorty.array);
  //console.log(readData)

  return (
    <div>
      <h1 className="text-center">Rick and Morty list</h1>

      {readData.map((item, id) => (
        <div key={id} className="card">
          <div className="card-body">{item.name}</div>
        </div>
      ))}

      <div className="d-grid gap-2 d-md-block">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(getDataAccion())}
        >
          {" "}
          Obtener Data{" "}
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(nextPageDataAccion())}
        >
          {" "}
          Siguiente{" "}
        </button>
      </div>
    </div>
  );
};

export default RickAndMorty;

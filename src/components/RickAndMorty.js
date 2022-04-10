// prueba de commit
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getDataAccion,
  nextPageDataAccion,
  previousPageDataAccion,
} from "../REDUX/rickDucks";

const RickAndMorty = () => {
  const dispatch = useDispatch();

  const readData = useSelector((store) => store.rickAndMorty.results);
  const { next } = useSelector((store) => store.rickAndMorty.info);
  const { prev } = useSelector((store) => store.rickAndMorty.info);

  //console.log(readData)

  return (
    <div>
      <h1 className="text-center">Rick and Morty list</h1>

      {readData.length === 0 && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(getDataAccion())}
        >
          {" "}
          Obtener Data{" "}
        </button>
      )}

      {readData.map((item, id) => (
        <div key={id} className="card">
          <div className="card-body">{item.name}</div>
        </div>
      ))}

      <div className="d-grid gap-2 d-md-block mt-3">
        {prev && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(previousPageDataAccion())}
          >
            {" "}
            Anterior{" "}
          </button>
        )}
        {next && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(nextPageDataAccion())}
          >
            {" "}
            Siguiente{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default RickAndMorty;

// prueba de commit
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getDataAccion,
  nextPageDataAccion,
  previousPageDataAccion,
} from "../REDUX/rickDucks";
import "../styles/cardFlip.css";
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

<div className="mt-3 row row-cols-1 row-cols-md-4 g-4">
      {readData.map((item, id) => (
        /*  <div key={id} className="card">
          <div className="card-body">{item.name}</div>
        </div> */
        
          <div key={id} className="col">
           
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={item.image} class="card-img-top" alt={item.name} />
                  <h3 className="card-title">{item.name}</h3>
                </div>
                <div className="flip-card-back text-center">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">{item.location.name}</p>
                  <p className="card-text">{item.status}</p>
                  <p className="card-text">{item.gender}</p>
                  <p className="card-text">{item.species}</p>
                  <p className="card-text">{item.origin.name}</p>
                </div>
              </div>
            </div>
            
          </div>
        
      ))}
      </div>

      <div className="d-grid gap-2 d-md-block mt-3 text-center">
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

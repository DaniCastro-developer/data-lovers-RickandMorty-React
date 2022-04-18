import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailsCharacter } from "../REDUX/rickDucks";

const Details = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = () => {
      dispatch(DetailsCharacter());
    };
    fetchData();
  }, [dispatch]);

  const character = useSelector((store) => store.rickAndMorty.details);
  //console.log(character);

  return character ? (
    <div>
      Details
      <div className="card text-center text-uppercase">
        <div className="card-body">
          <img
            className="img-fluid"
            alt={character.Name}
            src={character.Image}
          />
          <div className="card-title"> {character.Name}</div>
          <p className="card-text">
            Género: {character.Gender} - Estado: {character.Status}{" "}
          </p>
          <p className="card-text">
            Origen: {character.Origin} - Especie: {character.Specie}{" "}
          </p>
          <p className="card-text">
            Ubicación: {character.Location} 
          </p>
          <p className="card-text"> Episodios: </p>

          {[character.Episode].forEach((item, index) => (
           
                <li> {item[index]} </li>
              ))
            
         
          }

        </div>
      </div>
    </div>
  ) : null;
};

export default Details;

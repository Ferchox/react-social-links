import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const character = props.character;

  return (
    <>
      <div className="img">
        <img src={character.image} alt={`avatar de ${character.name}`} />
      </div>
      <h1>{character.name}</h1>
      {character.status === "Dead" ? (
        <h4>Muerto</h4>
      ) : character.status === "unknown" ? (
        <h5>Desconocido</h5>
      ) : (
        <h2>Vivo</h2>
      )}
      <h3>
        {character.species} de {character.origin.name}
      </h3>
    </>
  );
};

export default UserDetails;

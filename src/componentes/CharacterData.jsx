import React from "react";
import "./CharacterData.css";

function CharacterData(props) {
  const character = props.character;
  let statusClass = "";

  if (character.status === "Dead") {
    statusClass = "muerto";
  } else if (character.status === "unknown") {
    statusClass = "desconocido";
  } else {
    statusClass = "vivo";
  }

  return (
    <div className="container-info-personaje">
      <img src={character.image} />
      <button className={statusClass}>{character.status}</button>
      <div className="descripcion">{character.type}</div>
    </div>
  );
}

export default CharacterData;

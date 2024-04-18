import React from "react";
import "./CharacterData.css";

function CharacterData(props) {
  const character = props.character;
  return (
    <div className="cuadro">
      <img src={character.image} />
      <button>{character.status}</button>
      <p>{character.type}</p>
    </div>
  );
}

export default CharacterData;

import React from "react";
import "./Character.css";
import CharacterData from "./CharacterData";
import Episodes from "./Episodes";

function Character(props) {
  const character = props.character;
  return (
    <div className="container">
        <CharacterData character={character} />
        <Episodes episodes={character.episode}></Episodes>
    </div>
  );
}

export default Character;

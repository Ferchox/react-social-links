import React from "react";
import "./Character.css";
import CharacterData from "./CharacterData";
import Episodes from "./Episodes";

function Character(props) {
  const character = props.character;
  
  return (
    <div className="container-personaje">
        <CharacterData character={character} />
        <Episodes episodes={character.episode}/>
        <button className="home">Home</button>
    </div>
  );
}

export default Character;

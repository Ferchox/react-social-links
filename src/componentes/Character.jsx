import React from "react";
import "./Character.css";
import CharacterData from "./CharacterData";
import Episodes from "./Episodes";

function Character(props) {
  const character = props.character;

  return (
    <div className="container-personaje">
      <CharacterData character={character} />
      <Episodes episodes={character.episode} />
      <NavLink to="/">
        <button className="home">Home</button>
      </NavLink>
    </div>
  );
}

export default Character;

import React from "react";
import "./Character.css";
import CharacterData from "./CharacterData";
import Episodes from "./Episodes";
import { NavLink } from "react-router-dom";


function Character(props) {
  const character = props.character;

  return (
    <div className="container-personaje">
      <CharacterData character={character} />
      <Episodes episodes={character.episode} />
      <NavLink to="/react-social-links">
        <button className="home">Home</button>
      </NavLink>
    </div>
  );
}

export default Character;

import React from "react";
import "./Card.css";
import UserDetails from "./UserDetails";
import { NavLink } from "react-router-dom";

function Card(props) {
  const character = props.character;
  return (
    <NavLink to ('/character/')>
      <div className="container">
        <div className="cuadro">
          <UserDetails character={character} />
        </div>
      </div>
    </NavLink>
  );
}

export default Card;

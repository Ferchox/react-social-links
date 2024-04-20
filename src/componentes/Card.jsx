import React from "react";
import "./Card.css";
import UserDetails from "./UserDetails";
import { NavLink } from "react-router-dom";

const Card = ({ character }) => {
  return (
    <NavLink to={`/react-social-links/character?id=${character.id}`}>
      <div className="container">
        <div className="cuadro">
          <UserDetails character={character} />
        </div>
      </div>
    </NavLink>
  );
};

export default Card;

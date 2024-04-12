import React from "react";
import "./Card.css";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";

function Card(props) {
  const user = props.user;
  const socialLinks=user["social-link"];
  return (
    <div className="container">
      <div className="cuadro">
        <UserDetails user={user} />
        <ButtonSection socialLinks={socialLinks}/>
      </div>
    </div>
  );
}

export default Card;

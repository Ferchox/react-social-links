import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const user = props.user;

  return (
    <>
      <div className="img">
        <img src={user.image} alt={`avatar de ${user.name}`} />
      </div>
      <h1>{user.name}</h1>
      {user.status === "Dead" ? (
        <h4>Muerto</h4>
      ) : user.status === "unknown" ? (
        <h5>Desconocido</h5>
      ) : (
        <h2>Vivo</h2>
      )}
      <h3>{user.species} de {user.origin.name}</h3>
    </>
  );
};

export default UserDetails;

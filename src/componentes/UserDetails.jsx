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
      <h2>Estado: {user.status}</h2>
      <h3>Especie: {user.species}</h3>
    </>
  );
};

export default UserDetails;

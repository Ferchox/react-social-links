import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const user = props.user;

  return (
    <>
      <div className="img">
        <img src={user.avatar} alt={`avatar de ${user.name}`} />
      </div>
      <h1>{user.name}</h1>
      <h2>{user.location}</h2>
      <h3>{user.description}</h3>
    </>
  );
};

export default UserDetails;

import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./componentes/Card";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://661037ce0640280f219c98bb.mockapi.io/api/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </>
  );
}

export default App;

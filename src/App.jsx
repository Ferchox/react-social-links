import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./componentes/Card";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const randoms = [];
    let misRandoms="";
    let n = 0;
    while (n < 10) {
      const numeroAleatorio = Math.floor(Math.random() * 825) + 1;
      misRandoms=misRandoms+numeroAleatorio+", ";
      n++;
    }
    let rickAPI="https://rickandmortyapi.com/api/character/"+misRandoms;
    fetch(rickAPI)
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

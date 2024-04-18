import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./componentes/Card";
import Character from "./componentes/Character";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const randoms = [];
    let misRandoms = "";
    let n = 0;
    while (n < 1) {
      const numeroAleatorio = Math.floor(Math.random() * 825) + 1;
      misRandoms = misRandoms + numeroAleatorio + ", ";
      n++;
    }
    let rickAPI = "https://rickandmortyapi.com/api/character/" + misRandoms;
    fetch(rickAPI)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacters(data);
      });
  }, []);
  return (
    <>
      {characters.map((character) => (
        /* <Card key={character.id} character={character} /> */
        <Character key={character.id} character={character} />
      ))}
    </>
  );
}

export default App;

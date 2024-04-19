import React, { useState, useEffect } from "react";
import Character from "./componentes/Character";
import { useSearchParams } from "react-router-dom";

function RickAndMortyApp() {
  const [characters, setCharacters] = useState([]);
  const id=useSearchParams.get("id");
  console.log(id);
  useEffect(() => {
    let misRandoms = "";
    let n = 0;
    while (n < 1) {
      const numeroAleatorio = Math.floor(Math.random() * 825) + 1;
      misRandoms = misRandoms + numeroAleatorio + ", ";
      n++;
    }
    let rickAPI = 'https://rickandmortyapi.com/api/character/${id}';
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
        <Character key={character.id} character={character} />
      ))}
    </>
  );
}

export default RickAndMortyApp;

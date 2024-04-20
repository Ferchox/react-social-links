import React, { useState, useEffect } from "react";
import Character from "./componentes/Character";
import { useSearchParams } from "react-router-dom";

function RickAndMortyApp() {
  const [characters, setCharacters] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log(id);
  useEffect(() => {
    let rickAPI = `https://rickandmortyapi.com/api/character/${id}`;
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
        <Character key={characters.id} character={characters} />

    </>
  );
}

export default RickAndMortyApp;

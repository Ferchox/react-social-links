import React, { useState, useEffect } from "react";
import Card from "./Card";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getRandomNumbers = async () => {
      const numerosRandoms = new Set();
      while (numerosRandoms.size < 10) {
        const numRandom = Math.floor(Math.random() * 825) + 1;
        numerosRandoms.add(numRandom);
      }
      return Array.from(numerosRandoms);
    };

    getRandomNumbers().then((randomNumbers) => {
      const requests = randomNumbers.map((randomNumber) =>
        fetch(`https://rickandmortyapi.com/api/character/${randomNumber}`)
          .then((res) => res.json())
          .catch((error) => console.error("Error fetching character:", error))
      );

      Promise.all(requests)
        .then((characters) => {
          setCharacters(characters);
        })
        .catch((error) => console.error("Error fetching characters:", error));
    });
  }, []);

  return (
    <>
      {characters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </>
  );
};

export default Home;

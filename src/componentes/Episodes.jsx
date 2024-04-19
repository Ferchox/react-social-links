import React, { useState, useEffect } from "react";
import "./Episodes.css";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/1,2")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          data = [data];
        }
        setEpisodes(data);
      });
  }, []);

  return (
    <div className="container-episodios">
      {episodes.map((episode) => (
        <div className="cuadro" key={episode.id}>
          <p><strong>Nombre del episodio:</strong> {episode.name}</p>
          <p><strong>Fecha al aire:</strong> {episode.air_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;



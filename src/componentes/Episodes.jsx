import React, { useState, useEffect } from "react";
import "./Episodes.css";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/1,2,3,4")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEpisodes(data);
      });
  }, []);
  return (
    <>
      {episodes.map((episode) => (
        <div className="container">
          <div className="cuadro">
          Nombre del episodio: {episode.name} <br />
          Fecha al aire: {episode.air_date}
        </div>
        </div>
      ))}
    </>
  );
};

export default Episodes;

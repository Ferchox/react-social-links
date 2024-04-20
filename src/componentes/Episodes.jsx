import React, { useState, useEffect } from "react";
import "./Episodes.css";

const Episodes = ({ episodes }) => {
  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        if (!episodes || episodes.length === 0) {
          return;
        }
        const episodesPromises = episodes.map((url) =>
          fetch(url).then((res) => res.json())
        );
        const episodesData = await Promise.all(episodesPromises);
        setEpisodesData(episodesData);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };
  
    fetchEpisodes();
  }, [episodes]);
  
  

  const filteredEpisodesData = episodesData.slice(0, 4);

  return (
    <div className="container-episodios">
      {filteredEpisodesData.map((episode, index) => (
        <div className="cuadro-episodio" key={episode.id}>
          <p>
            <strong>Nombre del episodio:</strong> {episode.name}
          </p>
          <p>Fecha al aire: {episode.air_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;

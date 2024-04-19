import React, { useState, useEffect } from "react";
import "./Episodes.css";

const Episodes = ({ episodes }) => {
  const [episodesData, setEpisodesData] = useState([]);
  let n = 0;
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
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

  return (
    <div className="container-episodios">
      {episodesData.map((episode, index) =>
        index !== 4 ? (
          <div className="cuadro" key={episode.id}>
            <p>
              <strong>Nombre del episodio:</strong> {episode.name}
            </p>
            <p>Fecha al aire: {episode.air_date}</p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Episodes;

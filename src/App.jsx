import React from "react";
import "./App.css";
import RickAndMortyApp from "./componentes/RickAndMortyApp";

function App() {
  
  return (
    <>
      {characters.map((character) => (
        <RickAndMortyApp />
      ))}
    </>
  );
}

export default App;

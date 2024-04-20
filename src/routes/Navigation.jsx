import React from "react";
import RickAndMortyApp from "../RickAndMortyApp";
import Home from "../componentes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-social-links/" element={<Home />} />
        <Route path="/react-social-links/character" element={<RickAndMortyApp />} />
        <Route path="/react-social-links/*" element={<p>Error 404 Recurso no encontrado</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

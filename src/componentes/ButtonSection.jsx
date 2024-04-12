import React from "react";
import "./ButtonSection.css";
export const ButtonSection = ({socialLinks}) => {
  return (
    <>
      <div className="contenedor1">
        {
          socialLinks.map(
            socialLinks=> <button key={socialLinks.main}>{socialLinks.main}</button>
          )
        }
      </div>
    </>
  );
};

export default ButtonSection;

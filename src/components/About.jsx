import React from "react";
import "./About.css";
import personalImage from "./../about.png";

export default function () {
  return (
    <div className="aboutPrincipal">
      <img className="personalImage" src={personalImage} alt={personalImage} />
      <div className="acercaDe">
        <h1>Acerca de:</h1>
        <h3>
          Ingeniero mecatrónico con grandes habilidades en diseño,
          automatización, optimización y control de maquinaria en procesos
          industriales. Conocimiento en las áreas de mecánica, eléctrica y
          electrónica, capaz de organizar grupos de trabajo y lograr objetivos
          tanto personales como de equipo. Comprometido con el trabajo,
          habilidad para proponer constantemente ideas innovadoras de acuerdo
          con los procesos que se realicen en la empresa. Gran habilidad para
          adaptarse a situaciones adversas.
        </h3>
      </div>
    </div>
  );
}

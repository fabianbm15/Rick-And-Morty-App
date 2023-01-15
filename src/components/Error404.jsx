import React from "react";
import "./Error404.css";
import CaraError0 from "./../caraError.png";

export default function Error404() {
  return (
    <div className="divError">
      <h1 className="ops">Ops...</h1>
      <h1 className="error">Error</h1>
      <h1 className="e404">
        4 <img className="caraError0" src={CaraError0} alt={CaraError0} /> 4
      </h1>
      <h2 className="mensajeError">
        ¡La página a la que estás intentando acceder no existe!
      </h2>
    </div>
  );
}

import "./Nav.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
   const [character, setCharacter] = useState("");
   function handleInput(event) {
      setCharacter(event.target.value);
   }

   function randomCharacter(event) {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      setCharacter("");
      props.onSearch(randomNumber);
   }
   return (
      <div className="container">
         <div className="navBar">
            <Link to={"/home"}>
               <button className="boton">Inicio</button>
            </Link>

            <Link to={"/favorites"}>
               <button className="boton">Mis Favoritos</button>
            </Link>

            <input
               className="barraBusqueda"
               type="search"
               name="search"
               placeholder="Escribe el id"
               onChange={(e) => handleInput(e)}
               value={character}
            />
            <button className="boton" onClick={() => props.onSearch(character)}>
               Agregar
            </button>
            <button className="boton" onClick={randomCharacter}>
               Random
            </button>
            <Link to={"/"}>
               <button className="botonLogOut" onClick={props.logout}>
                  Cerrar Sesión
               </button>
            </Link>
         </div>
      </div>
   );
}

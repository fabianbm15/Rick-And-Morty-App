import "./SearchBar.css";

import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  function handleInput(event) {
    setCharacter(event.target.value);
  }

  function randomCharacter(event) {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    setCharacter(randomNumber);
  }

  return (
    <div className="searchBar">
      <input
        className="barraBusqueda"
        type="search"
        name="search"
        placeholder="Escribe el id del personaje"
        onChange={(e) => handleInput(e)}
        value={character}
      />
      <button
        className="botonSearchBar"
        onClick={() => props.onSearch(character)}
      >
        Agregar
      </button>
      <button className="botonSearchBar" onClick={randomCharacter}>
        Random
      </button>
    </div>
  );
}

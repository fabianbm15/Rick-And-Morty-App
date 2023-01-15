import "./App.css";
import Cards from "./components/Cards.jsx";
import { useState } from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Error404 from "./components/Error404";

function App() {
  const [characters, setCharacters] = useState([]);

  // const onSearch = (element) => {
  //   setCharacters([
  //     ...characters,
  //     // {
  //     //   name: 'Morty Smith',
  //     //   species: 'Human',
  //     //   gender: 'Male',
  //     //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //     // }
  //   ])
  // }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            alert("Ese personaje ya existe!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters((data) => {
      return data.filter((e) => e.id !== id);
    });
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>

        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;

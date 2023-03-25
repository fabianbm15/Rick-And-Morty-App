import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Error404 from "./components/Error404";
import Favorites from "./components/Favorites";
import Portfolio from "./components/Portfolio";
import axios from "axios";

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();

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

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const username = process.env.REACT_APP_USERNAME;
   const password = process.env.REACT_APP_PASSWORD;

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate("/home");
      } else {
         alert("Username o password incorrectos");
      }
   }

   function logout(userData) {
      setAccess(false);
      navigate("/");
   }

   /*
  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      // fetch(`https://rickandmortyapi.com/api/character/${character}`)

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
  */

   async function onSearch(character) {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${character}`);
      const data = response.data;
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
   }

   function onClose(id) {
      setCharacters((data) => {
         return data.filter((e) => e.id !== id);
      });
   }
   useEffect(() => {
      !access && navigate("/");
   }, [access, navigate]);

   return (
      <div className="App" style={{ padding: "25px" }}>
         <div>{location.pathname === "/" ? null : <Nav onSearch={onSearch} logout={logout} />}</div>
         <Routes>
            <Route path="/" element={<Form login={login} />}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:detailId" element={<Detail />}></Route>
            <Route path="/favorites" element={<Favorites characters={characters} onClose={onClose} />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>

            <Route path="*" element={<Error404 />}></Route>
         </Routes>
      </div>
   );
}

export default App;

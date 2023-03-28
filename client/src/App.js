import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Error404 from "./components/Error404";
import Favorites from "./components/Favorites";
import axios from "axios";
import { addCharacter, deleteCharacter } from "./components/redux/actions";

function App() {
   const characterState = useSelector((s) => s.characters);
   const [characters, setCharacters] = useState([]);
   const dispatch = useDispatch();
   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const username = "33b@soyhenry.com"; // process.env.REACT_APP_USERNAME;
   const password = "@Model101"; //process.env.REACT_APP_PASSWORD;

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate("/home");
      } else {
         alert("Username o password incorrectos");
      }
   }

   function logout() {
      setAccess(false);
      navigate("/");
   }

   async function onSearch(character) {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${character}`);
      const data = response.data;
      if (data.name) {
         let exist = characters.find((e) => e.id === data.id);
         if (exist) {
            alert("Ese personaje ya existe!");
         } else {
            dispatch(addCharacter(data));
         }
      } else {
         window.alert("No hay personajes con ese ID");
      }
   }

   function onClose(id) {
      dispatch(deleteCharacter(id));
   }
   useEffect(() => {
      !access && navigate("/");
   }, [access, navigate]);

   useEffect(() => {
      setCharacters(characterState);
   }, [characterState]);

   return (
      <div className="App" style={{ paddingTop: "25px" }}>
         <div>{location.pathname === "/" ? null : <Nav onSearch={onSearch} logout={logout} />}</div>
         <div style={{ paddingTop: "70px" }}>
            <Routes>
               <Route path="/" element={<Form login={login} setAccess={setAccess} />}></Route>
               <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
               <Route path="/detail/:detailId" element={<Detail />}></Route>
               <Route path="/favorites" element={<Favorites characters={characters} onClose={onClose} />}></Route>
               <Route path="*" element={<Error404 />}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;

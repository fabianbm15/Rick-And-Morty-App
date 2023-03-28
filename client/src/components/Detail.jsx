import "./Detail.css";

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Detail() {
   const { detailId } = useParams();
   const [character, setCharacter] = useState({});
   const location = useLocation();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios(`http://localhost:3001/rickandmorty/detail/${detailId}`);
            const char = response.data;
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert("No hay personajes con ese ID");
            }
         } catch (error) {
            window.alert("No hay personajes con ese ID");
         }
      };
      fetchData();
      return setCharacter({});
   }, [detailId, location.pathname]);

   return (
      <div className="container">
         <div className="divDataImage">
            <div>
               <Link to={"/home"}>
                  <button className="button">Volver</button>
               </Link>
               <div className="divData">
                  <h1>NOMBRE: {character.name}</h1>
                  <h3>STATUS: {character.status}</h3>
                  <h3>ESPECIE: {character.species}</h3>
                  <h3>GÉNERO: {character.gender}</h3>
                  <h3>ORIGEN: {character.origin?.name}</h3>
               </div>
            </div>

            <div className="divImage">
               <img className="image" src={character.image} alt={character.image} />
            </div>
         </div>
      </div>
   );
}

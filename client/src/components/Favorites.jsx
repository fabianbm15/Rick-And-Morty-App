import "./Favorites.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards, reset } from "./redux/actions";

export default function Favorites(props) {
   const dispatch = useDispatch();
   const myFavorites = useSelector((s) => s.myFavorites);

   function handleClick(e) {
      e.preventDefault();
      const { name, value } = e.target;
      if (name === "filter") {
         return dispatch(filterCards(value));
      }
      if (name === "order") {
         dispatch(orderCards(value));
      }
   }

   return (
      <div className="container">
         {myFavorites.length > 0 ? (
            <div className="favoriteCards">
               <div className="orderFilter">
                  <h5>Filtro</h5>
                  <select className="select" name="filter" defaultValue={"Default"} onChange={handleClick}>
                     <option value="Default" disabled>
                        Default
                     </option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="Genderless">Genderless</option>
                     <option value="unknown">unknown</option>
                  </select>
                  <h5>Orden</h5>
                  <select className="select" name="order" defaultValue={"Default"} onChange={handleClick}>
                     <option value="Default" disabled>
                        Default
                     </option>
                     <option value="Ascendente">Ascendente</option>
                     <option value="Descendente">Descendente</option>
                  </select>
                  <div>
                     <button className="resetButton" onClick={() => dispatch(reset())}>
                        Reset
                     </button>
                  </div>
               </div>
               {myFavorites?.map(function (element) {
                  return (
                     <Card
                        key={element.id}
                        id={element.id}
                        name={element.name}
                        species={element.species}
                        gender={element.gender}
                        image={element.image}
                        onClose={() => props.onClose(element.id)}
                     />
                  );
               })}
            </div>
         ) : (
            <div className="emptyCharacter">
               No tiene favoritos, puede agregar personajes a favoritos pulsando sobre el corazón en la parte superior izquierda de las cards en el
               home.
            </div>
         )}
      </div>
   );
}

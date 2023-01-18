import "./Favorites.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards, reset } from "./redux/actions";

export default function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((s) => s.myFavorites);

  // const characters = props.characters.filter((e) => {
  //   for (let i = 0; i < myFavorites.length; i++) {
  //     if (myFavorites[i].id === e.id) {
  //       return e;
  //     }
  //   }
  // });

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
    <div className="favoriteCards">
      <div>
        <select name="order" defaultValue={"Default"} onChange={handleClick}>
          <option value="Default" disabled>
            Default
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" defaultValue={"Default"} onChange={handleClick}>
          <option value="Default" disabled>
            Default
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <div>
          <button onClick={() => dispatch(reset())}>Reset</button>
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
  );
}

import "./Favorites.css";
import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Favorites(props) {
  const myFavorites = useSelector((s) => s.myFavorites);
  const characters = props.characters.filter((e) => {
    return myFavorites.includes(e.id);
  });
  return (
    <div className="favoriteCards">
      {characters.map(function (element) {
        return (
          <Card
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

import "./Card.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "./redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((s) => s.myFavorites);

  function handleFavorite(ch) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(ch.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(ch));
    }
  }

  useEffect(() => {
    myFavorites.forEach((ch) => {
      if (ch.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);
  // }, [myFavorites]);

  return (
    <div className="card">
      <img className="imagen" src={props.image} alt={props.image} />

      {isFav ? (
        <button
          className="buttonFavoriteOn"
          onClick={() => handleFavorite(props)}
        >
          ❤️
        </button>
      ) : (
        <button
          className="buttonFavoriteOff"
          onClick={() => handleFavorite(props)}
        >
          🤍
        </button>
      )}

      <button className="botonCerrar" onClick={props.onClose}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className="nombre">{props.name}</h2>
      </Link>
      <div className="especieGenero">
        <div style={{ flex: 1 }}>
          <h2>Especie:</h2>
          <h2>{props.species}</h2>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Género:</h2>
          <h2>{props.gender}</h2>
        </div>
      </div>
    </div>
  );
}
// function mapDispatchToProps(dispatch) {
//   return {
//     addFavorite: (id) => dispatch(addFavorite(id)),
//     deleteFavorite: (id) => dispatch(deleteFavorite(id)),
//   };
// }

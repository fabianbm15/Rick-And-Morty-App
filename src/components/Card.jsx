import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <img className="imagen" src={props.image} alt={props.image} />
      <button className="botonCerrar" onClick={props.onClose}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className="nombre">{props.name}</h2>
        <div className="especieGenero">
          <h2>Especie: {props.species}</h2>
          <h2>Género: {props.gender}</h2>
        </div>
      </Link>
    </div>
  );
}

import "./Nav.css";

import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navBar">
      <Link to={"/home"}>
        <button className="boton">Home</button>
      </Link>

      <Link to={"/About"}>
        <button className="boton">About</button>
      </Link>

      <SearchBar onSearch={props.onSearch} />

      <Link to={"/About"}>
        <button className="botonLogOut" onClick={props.logout}>
          Log Out
        </button>
      </Link>
    </div>
  );
}

import "./Nav.css";

import React from "react";
import SearchBar from "./SearchBar";
import About from "./About";
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
    </div>
  );
}

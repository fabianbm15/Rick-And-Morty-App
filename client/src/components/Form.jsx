import "./Form.css";
import React, { useState } from "react";
import validate from "./validate";
import rickAndMortyImage from "../images/rickandmorty.webp";

export default function Form(props) {
   const [userData, setUserData] = useState({
      username: "",
      password: "",
   });

   const [errors, setErrors] = useState({
      username: "",
      password: "",
   });

   function handleInputChange(e) {
      setUserData({
         ...userData,
         [e.target.name]: e.target.value,
      });
      setErrors(
         validate({
            ...userData,
            [e.target.name]: e.target.value,
         })
      );
   }

   function handleSubmit(e) {
      e.preventDefault();
      props.login(userData);
   }

   return (
      <div className="container">
         <div className="divPage">
            <img className="imageTitle" src={rickAndMortyImage} alt="No se encuentra la imagen." />
            <form
               className="form"
               onSubmit={(e) => {
                  handleSubmit(e);
               }}
            >
               <div className="username">
                  <label>Correo: </label>
                  <input
                     className={"input"}
                     type="text"
                     name="username"
                     placeholder="Ingrese su correo"
                     onChange={(e) => handleInputChange(e)}
                     style={errors.username === undefined || errors.username === "" ? { border: "1px solid black" } : { border: "1px solid red" }}
                  />
                  <p className="danger">{errors.username}</p>
               </div>
               <div className="password">
                  <label>Password: </label>
                  <input
                     className={"input"}
                     type="password"
                     name="password"
                     placeholder="Ingrese su contraseña"
                     onChange={(e) => handleInputChange(e)}
                     style={errors.password === undefined || errors.password === "" ? { border: "1px solid black" } : { border: "1px solid red" }}
                  />
                  <p className="danger">{errors.password}</p>
               </div>
               <button className="loginButton" type="submit">
                  Iniciar Sesión
               </button>
            </form>
            <div>
               <p>Correo: 33b@soyhenry.com</p>
               <p>Password: @Model101</p>
            </div>
         </div>
      </div>
   );
}

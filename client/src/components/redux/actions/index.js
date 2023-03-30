import { ADD_CHARACTERS, ADD_FAVORITES, DELETE_CHARACTERS, DELETE_FAVORITES, FILTER, ORDER, RESET } from "./types";

import axios from "axios";
const BACK = process.env.REACT_APP_BACK;
export const addFavorite = function (ch) {
   return async function (dispatch) {
      try {
         const response = await axios.post(`${BACK}/rickandmorty/fav`, ch);
         const data = response.data;

         dispatch({
            type: ADD_FAVORITES,
            payload: data,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

export const deleteFavorite = function (id) {
   return async function (dispatch) {
      try {
         await axios.delete(`${BACK}/rickandmorty/fav/${id}`);
         dispatch({
            type: DELETE_FAVORITES,
            payload: id,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

export const filterCards = function (status) {
   return {
      type: FILTER,
      payload: status,
   };
};

export const orderCards = function (id) {
   return {
      type: ORDER,
      payload: id,
   };
};

export const reset = function () {
   return {
      type: RESET,
   };
};

export const addCharacter = function (ch) {
   return async function (dispatch) {
      try {
         const response = await axios.post(`${BACK}/rickandmorty/char`, ch);
         const data = response.data;

         dispatch({
            type: ADD_CHARACTERS,
            payload: data,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

export const deleteCharacter = function (id) {
   return async function (dispatch) {
      try {
         await axios.delete(`${BACK}/rickandmorty/char/${id}`);
         dispatch({
            type: DELETE_CHARACTERS,
            payload: id,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

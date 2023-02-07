import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from "./types";

import axios from "axios";

export const addFavorite = function (ch) {
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/rickandmorty/fav`, ch)
      .then((v) => v.data)
      .then((d) => {
        dispatch({
          type: ADD_FAVORITES,
          payload: d,
        });
      });
  };
};

export const deleteFavorite = function (id) {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      .then((v) => v.data)
      .then((d) => {
        dispatch({
          type: DELETE_FAVORITES,
          payload: id,
        });
      });
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

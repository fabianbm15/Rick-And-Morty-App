import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from "./types";

export const addFavorite = function (ch) {
  return {
    type: ADD_FAVORITES,
    payload: ch,
  };
};

export const deleteFavorite = function (id) {
  return {
    type: DELETE_FAVORITES,
    payload: id,
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

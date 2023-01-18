import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";

export const addFavorite = function (id) {
  return {
    type: ADD_FAVORITES,
    payload: id,
  };
};

export const deleteFavorite = function (id) {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};

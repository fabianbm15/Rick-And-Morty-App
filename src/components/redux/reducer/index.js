import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  RESET,
} from "./../actions/types";

const initialState = {
  myFavorites: [],
  myFavoritesOrigin: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin, payload],
        myFavoritesOrigin: [...state.myFavoritesOrigin, payload],
      };
    case DELETE_FAVORITES:
      const filterMyFavorites = state.myFavorites.filter((ch) => {
        return ch.id !== payload;
      });
      return {
        ...state,
        myFavorites: filterMyFavorites,
        myFavoritesOrigin: filterMyFavorites,
      };
    case FILTER:
      const filterCopy = [...state.myFavoritesOrigin];
      const filter = filterCopy.filter((ch) => {
        return ch.gender === payload;
      });
      return {
        ...state,
        myFavorites: filter,
      };
    case ORDER:
      const orderCopy = [...state.myFavoritesOrigin];
      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };
    default:
      return state;
  }
}

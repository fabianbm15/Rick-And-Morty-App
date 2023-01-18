import { ADD_FAVORITES, DELETE_FAVORITES } from "./../actions/types";

const initialState = {
  myFavorites: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITES:
      const filterMyFavorites = state.myFavorites.filter((id) => {
        return id !== payload;
      });
      return {
        ...state,
        myFavorites: filterMyFavorites,
      };
    default:
      return state;
  }
}

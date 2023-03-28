import { ADD_CHARACTERS, ADD_FAVORITES, DELETE_CHARACTERS, DELETE_FAVORITES, FILTER, ORDER, RESET } from "./../actions/types";
import { setItem, getItem } from "../../../utils/localStorage";
const initialState = {
   characters: getItem("character") || [],
   charactersOrigin: getItem("character") || [],
   myFavorites: getItem("favorites") || [],
   myFavoritesOrigin: getItem("favorites") || [],
};

export default function rootReducer(state = initialState, { type, payload }) {
   switch (type) {
      case ADD_CHARACTERS:
         setItem("character", [...state.charactersOrigin, payload]);
         return {
            ...state,
            characters: [...state.charactersOrigin, payload],
            charactersOrigin: [...state.charactersOrigin, payload],
         };
      case DELETE_CHARACTERS:
         const filterCharacters = state.characters.filter((ch) => {
            return ch.id !== payload;
         });
         setItem("character", filterCharacters);
         return {
            ...state,
            characters: filterCharacters,
            charactersOrigin: filterCharacters,
         };
      case ADD_FAVORITES:
         setItem("favorites", [...state.myFavoritesOrigin, payload]);
         return {
            ...state,
            myFavorites: [...state.myFavoritesOrigin, payload],
            myFavoritesOrigin: [...state.myFavoritesOrigin, payload],
         };
      case DELETE_FAVORITES:
         const filterMyFavorites = state.myFavorites.filter((ch) => {
            return ch.id !== payload;
         });
         setItem("favorites", filterMyFavorites);
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

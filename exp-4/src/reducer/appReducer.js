/**
 * App Reducer - Manages global state with useReducer
 * Actions: ADD_FAVORITE, REMOVE_FAVORITE, CLEAR_FAVORITES
 * Author: Anurag (23BAI70225) | Experiment 4
 */

export const initialState = {
  favorites: [],
};

export const actionTypes = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  CLEAR_FAVORITES: 'CLEAR_FAVORITES',
};

export function appReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE: {
      // Prevent duplicates
      const exists = state.favorites.some((item) => item.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case actionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };

    case actionTypes.CLEAR_FAVORITES:
      return {
        ...state,
        favorites: [],
      };

    default:
      return state;
  }
}

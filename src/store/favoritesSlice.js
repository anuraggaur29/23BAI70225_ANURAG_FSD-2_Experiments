import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
}

const favoritesSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addFavorite(state, action) {
      const exists = state.favorites.some((item) => item.id === action.payload.id)
      if (!exists) {
        state.favorites.push(action.payload)
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload)
    },
    clearFavorites(state) {
      state.favorites = []
    },
  },
})

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer

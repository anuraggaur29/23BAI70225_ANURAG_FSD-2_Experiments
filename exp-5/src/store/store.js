import { configureStore } from '@reduxjs/toolkit'
import appReducer from './favoritesSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})

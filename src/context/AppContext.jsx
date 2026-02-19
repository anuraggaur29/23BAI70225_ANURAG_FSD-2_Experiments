import { createContext, useContext, useReducer } from 'react';
import { appReducer, initialState } from '../reducer/appReducer';

/**
 * Global App Context - Provides theme + favorites state
 * Uses useReducer for structured state management
 * Author: Anurag (23BAI70225) | Experiment 4
 */
const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

export default AppContext;

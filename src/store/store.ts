import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../store/productsSlice';  // Import the products slice

/**
 * Configure the Redux store with the products reducer.
 * Additional reducers can be added here as the app scales.
 */
export const store = configureStore({
  reducer: {
    products: productsReducer,  // Register the products reducer
  },
});

/**
 * RootState type:
 * Automatically infers the state structure based on the store's reducers.
 * This type is useful for type-safe access to the state in components.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * AppDispatch type:
 * Provides type-safe access to the store's dispatch method.
 * This ensures that only valid actions can be dispatched.
 */
export type AppDispatch = typeof store.dispatch;

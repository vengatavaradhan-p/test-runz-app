// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/productSlice'; // Import your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

// Configure the store using the reducers and export it
const store = configureStore({
  reducer: {
    allbooks: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;

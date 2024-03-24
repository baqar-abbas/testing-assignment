import { createSlice } from '@reduxjs/toolkit'; // Import createSlice to create a slice
import { v4 as uuidv4 } from 'uuid';

// Define the initial state
const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: uuidv4(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: uuidv4(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

// Create a book slice using createSlice and define the reducers for adding and removing book.
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Export the action creators and the reducer
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

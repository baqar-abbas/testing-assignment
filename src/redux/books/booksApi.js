// Import the createAsyncThunk function from the Redux Toolkit library
// AsyncThunk is used to create async actions
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;

// Create an async thunk to fetch books from the API
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

// Create an async thunk to post a book to the API
export const postBook = createAsyncThunk('books/postBook', async (book) => {
  try {
    await axios.post(url, {
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return book;
  } catch (error) {
    return error;
  }
});

// Create an async thunk to delete a book from the API
export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    const result = await axios.delete(`${url}/${bookId}`);
    return { item_id: bookId, message: result.data };
  } catch (error) {
    return error.message;
  }
});

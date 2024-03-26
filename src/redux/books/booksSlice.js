import { createSlice } from '@reduxjs/toolkit'; // Import createSlice to create a slice
import { fetchBooks, postBook, deleteBook } from './booksApi'; // Import the fetchBooks, postBook, and deleteBook async thunks

// Define the initial state
const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

// Create a book slice using createSlice and define the reducers for adding and removing book.
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  // Add extraReducers to handle the async actions
  // The pending, fulfilled, and rejected actions are dispatched by the createAsyncThunk
  // The pending action is dispatched when the async action is started
  // The fulfilled action is dispatched when the async action is successfully completed
  // The rejected action is dispatched when the async action fails
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      const booksData = Object.keys(action.payload).map((key) => ({
        item_id: key,
        title: action.payload[key][0].title,
        category: action.payload[key][0].category,
        author: action.payload[key][0].author,
        percentage: 0,
      }));
      state.books = booksData;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(postBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    });
    builder.addCase(postBook.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload.item_id);
      alert(action.payload.message);
    });
  },
});

// Export the action creators and the reducer
export default booksSlice.reducer;

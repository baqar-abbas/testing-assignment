import { createSlice } from '@reduxjs/toolkit'; // Import createSlice to create a slice

// Define the initial state
const initialState = {
  categories: [
    'Action',
    'Biography',
    'Fiction',
    'Non-Fiction',
    'Programming',
    'Learning',
    'Sci-Fi',
  ],
};

// Create a categories slice using createSlice and define the reducer for checking the status
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // check status and always return Under construction
    checkStatus: (state) => {
      state.categories.push('Under construction');
    },
  },
});

// Export the action creator and the reducer
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;

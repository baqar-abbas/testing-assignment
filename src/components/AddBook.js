import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// Import the postBook async thunk
import { postBook } from '../redux/books/booksApi';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  // Handle the form submission and dispatch the postBook action
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const id = uuidv4();
      const newBook = {
        item_id: id,
        title,
        author,
        category,
        percentage: 0,
      };
      dispatch(postBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="title">
          Add New Book
          <input
            className="title"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <optgroup label="Category">
            <option value="Action">Action</option>
            <option value="Biography">Biography</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Programming">Programming</option>
            <option value="Learning">Learning</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </optgroup>
        </select>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;

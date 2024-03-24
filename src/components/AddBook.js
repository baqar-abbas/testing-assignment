import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const id = uuidv4();
      dispatch(addBook({ id, title, author }));
      setTitle('');
      setAuthor('');
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
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;

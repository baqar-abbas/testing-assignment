import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // To access the state and dispatch actions
import { removeBook } from '../redux/books/booksSlice'; // Import the removeBook action creator

const BookList = () => {
  // Access the books state from the store
  const books = useSelector((state) => state.allbooks.books);
  const dispatch = useDispatch();
  return (
    <div className="book-wrap">
      {books.map((book) => (
        <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div>
            <button
              type="button"
              className="remove"
              onClick={() => dispatch(removeBook(book.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;

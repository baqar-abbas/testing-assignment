/* eslint-disable */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // To access the state and dispatch actions
// Import the fetchBooks and deleteBook async thunks
// To display the list of books fetched from the API
// To delete a book from the API
import { fetchBooks, deleteBook } from '../redux/books/booksApi';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../media-queries/booklist.css';

const BookList = () => {
  // Access the books state from the store
  const { books, isLoading, error } = useSelector((state) => state.allbooks);
  const dispatch = useDispatch();

  // To implement pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  // Fetch the books from the API when the component mounts
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)
  .map(book => ({ 
    ...book, 
    percentage: Math.floor(Math.random() * 99) + 1, // Add a unique random percentage to each book
    chapter: Math.floor(Math.random() * 19) + 1  // Add a unique random chapter to each book
  })); 

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Display a loading message while the books are being fetched
  if (isLoading) {
    return (
      <>
        <p>please wait it is loading...</p>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  }

  // Display a message if there are no books available
  if (books.length === 0) {
    return (
      <div>
        <p>No books available to display</p>
      </div>
    );
  }

  // Display an error message if an error occurred while fetching the books
  if (error) {
    return <p>Error occurred while fetching books</p>;
  }

  // Display the list of books fetched from the API and provide a button to delete a book
  return (
    <div className="book-wrap">
      {currentBooks.map((book) => (
        <div className="wrapper" key={book.item_id}>
        <div className="book">
          <div className="book-details">
          <p className="book-category">{book.category}</p>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p> 
          <div className="edit-delete-buttons">
            <button type="button" className="edit-button">Edit</button>
            <span className="line">|</span>
            <button type="button" 
            className="delete"
            // Dispatch the deleteBook action when the button is clicked
            onClick={() => {
              dispatch(deleteBook(book.item_id));
            }}
            >
              Delete
              </button>
          </div>
          </div>
          <div className="circular-bar">
        <div className="progress">
                <CircularProgressbar className="progress-bar" value={book.percentage} />
              </div>
              <div className="percentage">
                <h3 className="percentage-num">{book.percentage}%</h3>
                <p className="completed">completed</p>
              </div>
        </div>
        <div className="chapter-wrap">
              <div className="chapter-info">
                <h3 className="current-chap">CURRENT CHAPTER</h3>
                <h3 className="chapterno">Chapter {book.chapter}</h3>
                <button type="button" className="update-btn">
                  <span className="update-progress">UPDATE PROGRESS</span>
                  </button>
              </div>
            </div>
        </div>

        </div>
      ))}
      {/* Display the pagination buttons */}
      <div className="next-prev-buttons">
        <button
          type="button"
          class="btn btn-dark custom-button"
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
        >
          Previous
        </button>
        <button
          type="button"
          class="btn btn-dark custom-button"
          disabled={currentPage === Math.ceil(books.length / booksPerPage)}
          onClick={() => paginate(currentPage < Math.ceil(books.length / booksPerPage)
            ? currentPage + 1 : currentPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;

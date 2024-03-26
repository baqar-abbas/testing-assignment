import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // To access the state and dispatch actions
// Import the fetchBooks and deleteBook async thunks
// To display the list of books fetched from the API
// To delete a book from the API
import { fetchBooks, deleteBook } from '../redux/books/booksApi';

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
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Display a loading message while the books are being fetched
  if (isLoading) {
    return <p>please wait it is loading...</p>;
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
        <div className="book" key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <div>
            <button
              type="button"
              className="remove"
              // Dispatch the deleteBook action when the button is clicked
              onClick={() => {
                dispatch(deleteBook(book.item_id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {/* Display the pagination buttons */}
      <div>
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
        >
          Previous
        </button>
        <button
          type="button"
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

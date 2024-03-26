import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // To access the state and dispatch actions
import { fetchBooks } from '../redux/books/booksApi'; // Import the fetchBooks async thunk

// Implement the functionality of filtering books by category
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [hasCheckedStatus, setHasCheckedStatus] = useState(false);
  const { books } = useSelector((state) => state.allbooks);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleCheckStatus = () => {
    const filtered = books.filter((book) => book.category === selectedCategory);
    setFilteredBooks(filtered);
    setHasCheckedStatus(true);
  };

  return (
    <>
      <h2>Categories</h2>
      <p>Select a category and press Check Status to filter books categorywise</p>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="btn btn-status"
        style={{
          marginTop: '5rem', backgroundColor: '#009FBD', fontSize: '16px', height: '3em', width: '10rem',
        }}
        onClick={handleCheckStatus}
      >
        Check Status
      </button>

      {selectedCategory && hasCheckedStatus && filteredBooks.length === 0 ? (
        <div>
          <p>No books available for the selected category</p>
        </div>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.item_id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Categories;

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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="my-3 custom-font">Categories</h2>
            <p className="custom-font">Select a category and press Check Status to filter books categorywise</p>
            <select className="form-select my-3" onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="btn btn-primary my-3"
              onClick={handleCheckStatus}
            >
              Check Status
            </button>
          </div>
        </div>

        {selectedCategory && hasCheckedStatus && filteredBooks.length === 0 ? (
          <div className="row">
            <div className="col-12">
              <p>No books available for the selected category</p>
            </div>
          </div>
        ) : (
          filteredBooks.map((book) => (
            <div className="row my-3" key={book.item_id}>
              <div className="col-12">
                <h3 className="custom-font-robo">{book.title}</h3>
                <p className="custom-font">{book.author}</p>
                <p className="custom-font">{book.category}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Categories;

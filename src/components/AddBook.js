/* eslint-disable */
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddBook = ({addNewBook}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && author.trim()) {
            addNewBook(title, author);
            setTitle('');
            setAuthor('');
        }
    }
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
            onChange = {(e) => setTitle(e.target.value)}
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
  )
}

AddBook.propTypes = {
    addNewBook: PropTypes.func.isRequired,
};

export default AddBook

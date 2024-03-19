/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

const BookList = ({books}) => {
  return (
    <div className="book-wrap">
      {books.map(book => (
        <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div>
            <button type='button' className='remove'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }),
    ).isRequired,
    }

export default BookList

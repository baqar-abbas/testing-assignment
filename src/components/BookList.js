/* eslint-disable */
import React from 'react'

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

export default BookList

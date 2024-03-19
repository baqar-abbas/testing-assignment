/* eslint-disable */
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';

const Books = () => {
 const [books, setBooks] = useState([
    {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzzanne Collins',
    },
    {
        id: uuidv4(),
        title: 'Dune',
        author: 'Frank Herbert',
    },
    {
        id: uuidv4(),
        title: 'Capital in the Twenty-First Century',
        author: 'Suzzanne Collins',
    },
 ]);
  return (
    <div>
        <BookList books={books} />
        <hr/>
        <br/>
      My Add Book Form goes here
    </div>
);
};

export default Books;

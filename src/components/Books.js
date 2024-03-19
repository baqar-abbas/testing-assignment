/* eslint-disable */
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import AddBook from './AddBook';

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

 function addNewBook(title, author) {
    const newBook = {
       id: uuidv4(),
       title,
       author,
    };
       setBooks([...books, newBook]);
   };

  return (
    <div>
        <BookList books={books} />
        <hr/>
        <br/>
      <AddBook addNewBook={addNewBook} />
    </div>
);
};

export default Books;

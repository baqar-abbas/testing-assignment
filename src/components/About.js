import React from 'react';

const About = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="my-3 custom-font">About Our Bookstore</h1>
        <p className="custom-font">Welcome to our online bookstore! This application is designed to help you discover and manage your favorite books.</p>
        <h2 className="my-3 custom-font">Features</h2>
        <ul>
          <li className="custom-font">
            <strong>Explore Books:</strong>
            {' '}
            Browse through a wide variety of books. Each book includes details such as the title,
            author, and category.
          </li>
          <li className="custom-font">
            <strong>Add Books:</strong>
            {' '}
            Add new books to the list by providing the title, author, and category.
          </li>
          <li className="custom-font">
            <strong>Search:</strong>
            {' '}
            Use the search feature to find books by category wise.
          </li>
          <li className="custom-font">
            <strong>Delete Books:</strong>
            {' '}
            Manage your book list by deleting books.
          </li>
          <li className="custom-font">
            <strong>Pagination:</strong>
            {' '}
            Navigate through the book list easily with the help of pagination.
          </li>
          <li className="custom-font">
            <strong>CRUD Demo:</strong>
            {' '}
            This application also includes a CRUD demo page where you can create,
            read, update, and delete users.
          </li>
        </ul>
        <p className="custom-font">We hope you enjoy using our bookstore application!</p>
      </div>
    </div>
  </div>
);

export default About;

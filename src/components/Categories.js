/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // To access the state and dispatch actions
import { checkStatus } from '../redux/categories/categoriesSlice'; // Import the checkStatus action creator

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        className="btn btn-status"
        style={{
          marginTop: '5rem', backgroundColor: '#009FBD', fontSize: '16px', height: '3em', width: '10rem',
        }}
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
      <ul>
        {categories.map((category, index) => <li key={index}>{category}</li>)}
      </ul>
    </>
  );
};

export default Categories;

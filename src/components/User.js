/* eslint-disable */
import React from 'react';

const User = ({id, name, email, onEdit, onDelete}) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <span className="name-span">{name}</span>
      <span className="email-span">{email}</span>
      <span className="edit-span">
        <button type="button" onClick={() => onEdit(id)}>Edit</button>
      </span>
      <span>
        <button type="button" onClick={handleDelete}>Delete</button>
      </span>
    </div>
  );
};

export default User;

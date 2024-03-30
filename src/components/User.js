import React from 'react';

// eslint-disable-next-line
const User = ({id, name, email, onEdit, onDelete}) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="row my-3">
      <div className="col-12 col-md-4 col-lg-3">
        <span className="name-span">{name}</span>
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <span className="email-span">{email}</span>
      </div>
      <div className="col-12 col-md-2 col-lg-3 mt-2 mt-md-0">
        <button type="button" className="btn btn-primary" onClick={() => onEdit(id)}>Edit</button>
      </div>
      <div className="col-12 col-md-2 col-lg-3 mt-2 mt-md-0">
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default User;

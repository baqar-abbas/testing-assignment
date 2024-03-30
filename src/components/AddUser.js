import React from 'react';

// eslint-disable-next-line
const AddUser = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target[0].value, e.target[1].value);
    e.target[0].value = '';
    e.target[1].value = '';
  };
  return (
    <div className="container">
      <h3 className="my-3">Add User</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

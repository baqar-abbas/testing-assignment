import React from 'react';

// eslint-disable-next-line
const EditUser = ({ onUpdate, user }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    onUpdate(user.id, e.target[0].value, e.target[1].value);
    e.target[0].value = '';
    e.target[1].value = '';
  };
  return (
    <div className="container">
      <h3 className="my-3">Edit User</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            {/* eslint-disable-next-line */}
            <input type="text" className="form-control" placeholder="Name" defaultValue={user.name} />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            {/* eslint-disable-next-line */}
            <input type="email" className="form-control" placeholder="Email" defaultValue={user.email} />
          </div>
          <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

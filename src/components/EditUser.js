/* eslint-disable */
import React from 'react';

const EditUser = ({ onUpdate, user }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(user.id, e.target[0].value, e.target[1].value);
    e.target[0].value = '';
    e.target[1].value = '';
  };
  return (
    <div>
      Edit User
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" defaultValue={user.name} />
        <input type="email" placeholder="Email" defaultValue={user.email} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;

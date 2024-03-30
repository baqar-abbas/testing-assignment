import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import User from './User';
import AddUser from './AddUser';
import EditUser from './EditUser';

const Crud = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [editingUser, setEditingUser] = useState(null);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => { console.log(error); });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onEdit = (id) => {
    const user = users.find((user) => user.id === id);
    setEditingUser(user);
  };

  const onAdd = async (name, email) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        id: uuidv4(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    // eslint-disable-next-line consistent-return
      .then((response) => {
        if (response.status !== 201) {
          console.log('Error adding user');
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const onUpdate = async (id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error updating user');
      })
      .then((data) => {
        setUsers(users.map((user) => (user.id === id ? data : user)));
        setEditingUser(null);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setUsers(users.filter((user) => user.id !== id));
        }
        throw new Error('Error deleting user');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="my-3">React CRUD using JSON Placeholder API</h2>
          <h3 className="my-3">Create, Read, Update, Delete</h3>
          <AddUser onAdd={onAdd} />
          <hr />
          <div>
            <div>
              {editingUser && (
              <EditUser
                onUpdate={onUpdate}
                user={editingUser}
              />
              )}
            </div>
            {users.map((user) => (
              <User
                id={user.id}
                key={user.id}
                name={user.name}
                email={user.email}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;

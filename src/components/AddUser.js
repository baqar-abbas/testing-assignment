/* eslint-disable */
import React from 'react'

const AddUser = ({onAdd}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target[0].value, e.target[1].value);
        e.target[0].value = '';
        e.target[1].value = '';
    }
  return (
    <div>
      Add User
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddUser

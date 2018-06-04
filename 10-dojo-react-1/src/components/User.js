import React from 'react'

const User = ({ id, name, add }) =>
  <div>
    <span>{name}</span>
    <button onClick={() => add(id)}>Add</button>
  </div>

export default User

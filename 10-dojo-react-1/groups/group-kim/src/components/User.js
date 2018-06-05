import React from 'react'

const User = ({ user, add }) => {
  return (
    <div className='User'>
      {user.name}
      <button onClick={() => add(user)}>Add</button>
    </div>
  )
}

export default User

import React from 'react'

const User = ({ user, add, children }) => {
  return (
    <div>
      {user.name}
      {children}
    </div>
  )
}

export default User

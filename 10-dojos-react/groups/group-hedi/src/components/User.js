import React from 'react'

const User = (props) => {
  return (
    <div>
      <span>{props.user.id}</span>
      <span>{props.user.name}</span>
      <button onClick={() => props.add(props.user)}>Add</button>
    </div>
  )
}


export default User

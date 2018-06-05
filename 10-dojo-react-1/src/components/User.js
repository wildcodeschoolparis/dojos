import React from 'react'

// /!\ Advanced
// - elements passed as children of a components are accessible through props.children
const User = ({ name, children }) =>
  <div>
    <span>{name}</span>
    {children}
  </div>

export default User

import React from 'react'

export default function Navbar(rutik) {
  return (
    <div>
      <p>This is {rutik.name}</p>
    </div>
  )
}

Navbar.prototype = {
    name : String
}

Navbar.defaultProps = {
    name : "Rutik"
}

import React from 'react'

const Pets = (props) => {
  const {id, name} = props
  
  return (
    <div>
      <h2>{id}</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default Pets
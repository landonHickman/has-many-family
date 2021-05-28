import React from 'react'

const Family = (props) => {
  const {id, name} = props
  return (
    <div>
      <h2>{name}</h2>
      <h3>{id}</h3>
    </div>
  )
}
export default Family
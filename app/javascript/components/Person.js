import React, {useState} from 'react'

const Person = (props) => {
  const {name, id} = props
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <button onClick={()=>setShowForm(!showForm)}>Add Family Member</button>
      <h3>{id}</h3>
      <h2>{name}</h2>
    </div>
  )
}

export default Person
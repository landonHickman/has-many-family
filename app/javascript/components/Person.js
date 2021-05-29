import React, {useState} from 'react'
import PersonForm from './PersonForm'

const Person = (props) => {
  const {name, id, familyId, updatePerson} = props
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <h3>{id}</h3>
      <h2>{name}</h2>
      <button onClick={()=>setShowForm(!showForm)}>Edit Form</button>
      {showForm && <PersonForm familyId={familyId} name={name} updatePerson={updatePerson} personId={id}/>}
    </div>
  )
}

export default Person
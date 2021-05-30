import React, {useState} from 'react'
import PersonForm from './PersonForm'
import Pets from './Pets'

const Person = (props) => {
  const {name, id, familyId, updatePerson, deletePerson} = props
  const [showForm, setShowForm] = useState(false)
  const [showPets, setShowPets] = useState(false)

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={()=>setShowPets(!showPets)}>Show Pets</button>
      <button onClick={()=>setShowForm(!showForm)}>Edit Form</button>
      <button onClick={()=>deletePerson(id)}>Delete</button>
      {showForm && <PersonForm familyId={familyId} name={name} updatePerson={updatePerson} personId={id}/>}
      {showPets && <Pets familyId={familyId} personId={id} personName={name}/>}
    </div>
  )
}

export default Person
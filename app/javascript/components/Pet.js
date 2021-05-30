import React, {useState} from 'react'
import PetForm from './PetForm'

const Pets = (props) => {
  const {id, name, familyId, personId, editPet, deletePet} = props
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      
      <h2>{name}</h2>
      <button onClick={()=>setShowForm(!showForm)}>Edit Pet</button>
      <button onClick={()=>deletePet(id)}>Delete</button>
      {showForm && <PetForm petId={id} familyId={familyId} personId={personId} editPet={editPet} name={name}/>}
    </div>
  )
}

export default Pets
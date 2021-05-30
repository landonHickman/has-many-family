import React from 'react'
import PetForm from './PetForm'

const Pets = (props) => {
  const {id, name, familyId, personId, editPet, deletePet} = props

  return (
    <div>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <PetForm petId={id} familyId={familyId} personId={personId} editPet={editPet} name={name}/>
      <button onClick={()=>deletePet(id)}>Delete</button>
    </div>
  )
}

export default Pets
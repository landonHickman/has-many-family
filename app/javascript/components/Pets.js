import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Pet from './Pet'
import PetForm from './PetForm'

const Pets = (props) => {
  const {familyId, personId, personName} = props 
  const[pet, setPet] = useState([])
  const [showForm, setShowForm] = useState(false)
  
  useEffect(()=>{
    getPets()
  }, [])

  const getPets = async () => {
    let res = await axios.get(`/families/${familyId}/people/${personId}/pets`)
    setPet(res.data.pet)
  }

  const addPet = (p) => {
    setPet([p, ...pet])
  }

  const editPet = (editpetid) => {
    let updatePet = pet.map (p => p.id === editpetid.id ? editpetid : p) 
    setPet(updatePet)
  }

  const deletePet = async (id) => {
    let res = await axios.delete(`/families/${familyId}/people/${personId}/pets/${id}`)
    let del = pet.filter (p => p.id != res.data.id)
    setPet(del)
  }

  const renderPets = () => {
    return pet.map (p => {
      return <Pet key={p.id} {...p} familyId={familyId} personId={personId} editPet={editPet} deletePet={deletePet}/>
    })
  }

  return (
    <div>
      <h2>{personName}'s Pets</h2>
      <button onClick={()=>setShowForm(!showForm)}>Add Pet</button>
      {showForm && <PetForm familyId={familyId} personId={personId} addPet={addPet}/>}
      {renderPets()}
      <h1>---------------------------</h1>
    </div>
  )
}

export default Pets
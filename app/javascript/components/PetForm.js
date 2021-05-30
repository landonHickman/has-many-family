import axios from 'axios'
import React, {useState} from 'react'

const PetForm = (props) => {

  const {familyId, personId, addPet, petId, editPet} = props
  const [name, setName] = useState(props.name ? props.name : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(petId){
        let res = await axios.put(`/families/${familyId}/people/${personId}/pets/${petId}`, {name: name})
        editPet(res.data)
      } else {
        let res = await axios.post(`/families/${familyId}/people/${personId}/pets`, {name: name})
        addPet(res.data)
      }
    } catch(err) {
      alert(err)
      console.log(err)
    }
    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{petId ? 'Edit Pet' : 'Add Pet'}</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>{petId ? 'Update' : 'Add'}</button>
      </form>
    </div>
  )
}
export default PetForm
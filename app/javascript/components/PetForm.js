import axios from 'axios'
import React, {useState} from 'react'

const PetForm = (props) => {

  const {familyId, personId, addPet} = props
  const [name, setName] = useState(props.name ? props.name : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      
      let res = await axios.post(`/families/${familyId}/people/${personId}/pets`, {name: name})
      addPet(res.data)
    } catch {

    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>Edit/Add</button>
      </form>
    </div>
  )
}
export default PetForm
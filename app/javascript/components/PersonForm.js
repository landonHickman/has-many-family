import axios from 'axios'
import React, {useState} from 'react'

const PersonForm = (props) => {
  const {familyId, personId, addPerson} = props
  const [name, setName] = useState(props.name ? props.name : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(personId){
        let res = await axios.put(`/families/${familyId}/people/${personId}`, {name})
        
      }else {
        let res = await axios.post(`/families/${familyId}/people`, {name})
        console.log('look here', res.data)
        addPerson(res.data)
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
        <p>{personId ? 'Edit' : 'Add'} First Name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>{personId ? 'Update' : 'Add' }</button>
      </form>
    </div>
  )
}
export default PersonForm
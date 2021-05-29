import axios from 'axios'
import React, {useState} from 'react'

const FamilyForm = (props) => {
  const {id, addFamilyName, editFamilyName} = props
  const [name, setName] = useState(props.name ? props.name : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(id){
        let res = await axios.put(`/families/${id}`, {name})
        editFamilyName(res.data)
      }else {
        let res = await axios.post('/families', {name})
        addFamilyName(res.data)
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
        <p>{id ? 'Edit' : 'Add'} Last Name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>{id ? 'Update' : 'Add' }</button>
      </form>
    </div>
  )
}
export default FamilyForm
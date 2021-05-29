import React, {useState} from 'react'
import FamilyForm from './FamilyForm'

const Family = (props) => {
  const {id, name, deleteFamily} = props
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <h3>{id}</h3>
      <h2>{name} Family</h2>
      <button onClick={()=> setShowForm(!showForm)}>Edit</button>
      <button onClick={()=> deleteFamily(id)}>Delete</button>
      {showForm && <FamilyForm id={id}/>}
    </div>
  )
}
export default Family
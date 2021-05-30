import React, {useState} from 'react'
import FamilyForm from './FamilyForm'
import People from './People'


const Family = (props) => {
  const {id, name, deleteFamily, editFamilyName} = props
  const [showForm, setShowForm] = useState(false)
  const [showPeople, setShowPeople] = useState(false)

  return (
    <div>
      <h1>{name} Family</h1>
      <button onClick={()=> setShowPeople(!showPeople)}>Show Member</button>
      <button onClick={()=> setShowForm(!showForm)}>Edit Form</button>
      <button onClick={()=> deleteFamily(id)}>Delete</button>
      {showForm && <FamilyForm id={id} editFamilyName={editFamilyName}/>}
      {showPeople && <People familyId={id}/>}
    </div>
  )
}
export default Family
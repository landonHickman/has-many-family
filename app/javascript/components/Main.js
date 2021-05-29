import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Family from './Family'
import FamilyForm from './FamilyForm'

const Main = () => {
  const [families, setFamilies] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getFamilies()
  },[])

  const getFamilies = async () => {
    let res = await axios.get('/families')
    // console.log(res)
    // console.log(res.data)
    setFamilies(res.data)
  }

  const addFamilyName = (familyName) => {
    let createName = [familyName, ...families]
    setFamilies(createName)
  } 

  const editFamilyName = (familyName) => {
    let updateName = families.map (f => {
      if(f.id === familyName.id){
        return familyName
      } else {
        return f
      }
    })
    setFamilies(updateName)
  }

  const deleteFamily = async (id) => {
    let res = await axios.delete(`/families/${id}`)
    let delFamily = families.filter (f => f.id !== res.data.id)
    setFamilies(delFamily)
  }

  const renderFamilies = () => {
    if(families.length == 0){
      return <p>No Families!</p>
    }
    return families.map (f=> {
      return (
        <Family key={f.id} {...f} deleteFamily={deleteFamily} editFamilyName={editFamilyName}/>
      )
    })
   
  }

  return(
    <div>
      <h1>Families</h1>
      <button onClick={()=> setShowForm(!showForm)}>Add Family Form</button>
      {showForm && <FamilyForm addFamilyName={addFamilyName}/>}
      {renderFamilies()}
    </div>
  )
}

export default Main
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Family from './Family'
import FamilyForm from './FamilyForm'

const Main = () => {
  const [families, setFamilies] = useState([])

  useEffect(()=>{
    getFamilies()
  },[])

  const getFamilies = async () => {
    let res = await axios.get('/families')
    console.log(res)
    console.log(res.data)

    setFamilies(res.data)
  }

  const addFamilyName = (familyName) => {
    let createName = [familyName, ...families]
    setFamilies(createName)
  } 

  const renderFamilies = () => {
    if(families.length == 0){
      return <p>No Families!</p>
    }
    return families.map (f=> {
      return (
        <Family key={f.id} {...f} />
      )
    })
   
  }

  return(
    <div>
      <h1>Main</h1>
      <FamilyForm addFamilyName={addFamilyName}/>
      {renderFamilies()}
    </div>
  )
}

export default Main
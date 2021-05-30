import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Pet from './Pet'

const Pets = (props) => {
  const {familyId, personId, personName} = props 
  const[pet, setPet] = useState([])
  
  useEffect(()=>{
    getPets()
  }, [])

  const getPets = async () => {
    let res = await axios.get(`/families/${familyId}/people/${personId}/pets`)
    console.log('look here', res)
    console.log('look here', res.data)
    console.log('look here', res.data.pet)
    setPet(res.data.pet)
  }

  const renderPets = () => {
    return pet.map (p => {
      return <Pet key={p.id} {...p}/>
    })
  }

  return (
    <div>
      <h2>{personName}'s Pets</h2>
      {renderPets()}
      <h1>---------------------------</h1>
    </div>
  )
}

export default Pets
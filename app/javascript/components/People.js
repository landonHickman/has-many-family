import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Person from './Person'

const People = (props) => {
  const {familyId} = props
  const [person, setPerson] = useState([])

  useEffect(()=>{
    getPeople()
  }, [])

  const getPeople = async () => {
    let res = await axios.get(`/families/${familyId}/people`)
    // console.log('Look here', res.data.person)
    setPerson(res.data.person)
  }

  const renderPeople = () => {
    return person.map (p => {
      return <Person key={p.id} {...p}/>
    })
  }

  return (
    <div>
      <h1>Family Member</h1>
      {renderPeople()}
      <h1>---------------------------</h1>
    </div>
  )
}

export default People
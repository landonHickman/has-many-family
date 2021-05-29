import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Person from './Person'
import PersonForm from './PersonForm'

const People = (props) => {
  const {familyId} = props
  const [person, setPerson] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getPeople()
  }, [])

  const getPeople = async () => {
    let res = await axios.get(`/families/${familyId}/people`)
    // console.log('Look here', res.data.person)
    setPerson(res.data.person)
  }

  const addPerson = (p) => {
    setPerson([p, ...person])
  }
  
  const updatePerson = (updateP) => {
    let updatedPerson = person.map(p => p.id === updateP.id ? updateP : p)
    setPerson(updatedPerson)
  }

  const deletePerson = (id) => {
    let del = person.filter(p => p.id != id)
    setPerson(del)
  }

  const renderPeople = () => {
    return person.map (p => {
      return <Person key={p.id} {...p} familyId={familyId} updatePerson={updatePerson} deletePerson={deletePerson}/>
    })
  }

  return (
    <div>
      <h1>Family Member</h1>
      <button onClick={()=>setShowForm(!showForm)}>Add Family Member</button>
      {showForm && <PersonForm familyId={familyId} addPerson={addPerson}/>}
      {renderPeople()}
      <h1>---------------------------</h1>
    </div>
  )
}

export default People
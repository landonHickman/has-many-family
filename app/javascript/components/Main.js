import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Family from './Family'

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
      {renderFamilies()}
    </div>
  )
}

export default Main
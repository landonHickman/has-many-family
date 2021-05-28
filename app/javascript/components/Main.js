import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Main = () => {
  const [families, setFamilies] = useState([])

  useEffect = (()=>{
    getFamilies()
  }, [])

  const getFamilies = async () => {
    let res = await axios.get('/families')
    setFamilies(res.data)
  }


  return(
    <div>
      <h1>Main</h1>
    </div>
  )
}

export default Main
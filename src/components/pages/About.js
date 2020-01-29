import React, { useState, useEffect } from 'react'
import axios from 'axios'


function About() {
  const [dynamicText, setDynamicText] = useState([null])

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3001/about')
        .then(result => {
          setDynamicText(result.data.value)
        })
    }
    getData()
  }, [])
  
  return dynamicText ? (
    <div className="About">
      <h1>About Us</h1>
      <p>{dynamicText || 'Example Text'}</p>
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default About
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function About() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/about')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="About">
      <h1>About Us</h1>
      {dynamicText.map(text => (
        <>
          <p>{text.value}</p>
          <br/>
        </>
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default About
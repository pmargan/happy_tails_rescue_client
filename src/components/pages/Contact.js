import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Contact() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/contact')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="Contact">
      <h1>Contact Us</h1>
      {dynamicText.map(text => (
        <>
          <h2>{text.title}</h2>
          <p>{text.value}</p>
          <br/>
        </>
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Contact
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Contact() {
  const [dynamicText, setDynamicText] = useState([null])

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3001/contact')
        .then(result => {
          setDynamicText(result.data.value)
        })
    }
    getData()
  }, [])
  
  return dynamicText ? (
    <div className="Contact">
      <h1>Contact</h1>
      <p>{dynamicText || 'Example Text'}</p>
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Contact
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Paragraph from '../helpers/Paragraph'


function Contact() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/text/contactPage')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return (
    <div className="Contact mainContainer">
      <h1>Contact Us</h1>
      <br />
      {dynamicText.map(text => (
        <Paragraph {...text} key={text._id} />
      ))}
    </div>
  )
}

export default Contact

import React, { useState, useEffect } from 'react'
import api from '../../API'

import Paragraph from '../helpers/Paragraph'


function Contact() {
  const [dynamicText, setDynamicText] = useState([])

  useEffect(() => {
    api.get('/text/contactPage')
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

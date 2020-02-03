import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

import Paragraph from '../helpers/Paragraph'

function About() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/text/welcomePage')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="About mainContainer">
      <h1>About Us</h1>
      <br />
      {dynamicText.map(text => (
        <Paragraph {...text} key={text._id} />
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default About
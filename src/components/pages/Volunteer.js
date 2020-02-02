import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Paragraph from '../helpers/Paragraph'

function Volunteer() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/text/Volunteer')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="Volunteer mainContainer">
      <h1>Volunteer</h1>
      {dynamicText.map(text => (
        <Paragraph {...text} key={text._id} />
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Volunteer
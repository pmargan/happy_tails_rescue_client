import React, { useState, useEffect } from 'react'
import api from '../../API'

import Paragraph from '../helpers/Paragraph'

function Volunteer() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    api.get('/text/volunteer')
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
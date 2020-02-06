import React, { useState, useEffect } from 'react'
import api from '../../API'

import Paragraph from '../helpers/Paragraph'


function GoldenTails() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    api.get('/text/goldenTails')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="GoldenTails mainContainer">
      <h1>Golden Tails</h1>
      <br />
      {dynamicText.map(text => (
        <Paragraph {...text} key={text._id} />
      ))}
    </div>
  ) : null
}

export default GoldenTails
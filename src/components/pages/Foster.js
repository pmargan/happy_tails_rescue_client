import React, { useState, useEffect } from 'react'
import api from '../../API'

import Animals from './Animals'
import Paragraph from '../helpers/Paragraph'

function Foster() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    api.get('/text/foster')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="About mainContainer">
      <h1>Foster</h1>
      <br />
      {dynamicText.map(text => (
        <Paragraph {...text} key={text._id} />
      ))}
      <Animals />
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Foster

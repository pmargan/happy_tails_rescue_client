import React, { useState, useEffect } from 'react'
import api from '../../API'

import Paragraph from '../helpers/Paragraph'

function Help() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    async function getData() {
      api.get('/text/helpUs')
        .then(result => {
          setDynamicText(result.data.value)
        })
    }
    getData()
  }, [])
  
  return dynamicText ? (
    <div className="Help mainContainer">
      <h1>Help Us</h1>
      <br />
      {dynamicText.map(text => (
        <Paragraph {...text} key={text._id} />
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Help

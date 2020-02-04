import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Paragraph from '../helpers/Paragraph'

function Help() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3001/text/helpUs')
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

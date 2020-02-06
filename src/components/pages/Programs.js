import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Paragraph from '../helpers/Paragraph'
import '../../stylesheets/pages/Programs.scss'

function Programs() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/text/communityPrograms')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="Programs mainContainer">
      <h1>Happy Tails Programs</h1>
      <br />
      {dynamicText.map(text => (
        <p className='programText'><Paragraph {...text} key={text._id} /></p>
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Programs

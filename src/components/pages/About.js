import React, { useState, useEffect } from 'react'
import axios from 'axios'
import banner from '../../img/banner.jpg'
import '../../stylesheets/pages/About.scss'

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
  <>
    <img src={banner} alt="Happy Tails Animal Rescue Banner" />
    <div className="About mainContainer">
      <h1>Welcome</h1>
      <br />
      {dynamicText.map(text => (
        <Paragraph {...text} key={text._id} />
      ))}
    </div>
    </>
  ) : (
    <p>nothing here yet</p>
  )
}

export default About
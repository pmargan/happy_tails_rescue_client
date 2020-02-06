import React, { useState, useEffect } from 'react'
import api from '../../API'
import banner from '../../img/banner.jpg'
import '../../stylesheets/pages/About.scss'

import Paragraph from '../helpers/Paragraph'
import { NULL } from 'node-sass'

function About() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    api.get('/text/welcomePage')
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
  ) : (<p></p>)
}

export default About
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import banner from '../../img/banner.jpg'


function About() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3001/about')
        .then(result => {
          setDynamicText(result.data.value)
        })
    }
    getData()
  }, [])
  
  return dynamicText ? (
  <>
    <img src={banner} alt="Happy Tails Animal Rescue Banner" />
    <div className="About">
      <h1>About Us</h1>
      {dynamicText.map(text => (
        <>
          <p>{text.value}</p>
          <br/>
        </>
      ))}
    </div>
    </>
  ) : (
    <p>nothing here yet</p>
  )
}

export default About
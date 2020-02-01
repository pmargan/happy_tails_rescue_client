import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Paragraph(props) {
  return (
    <>
      <h2>{props.data.title}</h2>
      <p>{props.data.value}</p>
    </>
  )
}

function Programs() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/community-programs')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="Programs">
      <h1>Happy Tails Programs</h1>
      {dynamicText.map(text => (
        <Paragraph data={{...text}} />
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Programs

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Paragraph(props) {
  return (
        <>
          <p>{props.data.value}</p>
        </>
  )
}


function Volunteer() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/volunteer')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])
  
  return dynamicText ? (
    <div className="Volunteer">
      <h1>Volunteer</h1>
      {dynamicText.map(text => (
        <Paragraph data={{...text}} />
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Volunteer
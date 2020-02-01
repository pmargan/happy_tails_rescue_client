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


function Help() {
  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3001/help-us')
        .then(result => {
          setDynamicText(result.data.value)
        })
    }
    getData()
  }, [])
  
  return dynamicText ? (
    <div className="Help">
      <h1>Help Us</h1>
      {dynamicText.map(text => (
        <Paragraph data={{...text}} />
      ))}
    </div>
  ) : (
    <p>nothing here yet</p>
  )
}

export default Help

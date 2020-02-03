import React from 'react'

export default function Paragraph(props) {
  return (
    <>
      {props.title && (
        <>
          <br />
          <hr />
          <br />
          <h2>{props.title}</h2>
          <br />
        </>
      )}
      <p>{props.value}</p>
      <br />
    </ >
  )
}
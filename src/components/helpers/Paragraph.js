import React from 'react'
import { Link } from 'react-router-dom'

export default function Paragraph({title, value, link, linkText}) {
  return (
    <>
      {title && (
        <>
          <br />
          <hr />
          <br />
          <h2>{title}</h2>
          <br />
        </>
      )}
      <p>{value}</p>
      <br />
      {link ? (<Link to={link} >{linkText}</Link>) : null }
    </ >
  )
}
import React from 'react'
import {Redirect} from "react-router-dom"

import '../stylesheets/Main.scss'

export default function Main(props) {

  if(props.redirect) {
    props.setRedirect(null)
    return <Redirect to={props.redirect} />
  }

  return (
    <main>
      <div className='options' >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {props.children}
    </main>
  )
}

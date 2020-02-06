import React from 'react'
import {Redirect} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faDonate } from "@fortawesome/free-solid-svg-icons"
import { faHandshake } from "@fortawesome/free-solid-svg-icons"
import { faPaw } from "@fortawesome/free-solid-svg-icons"
import '../stylesheets/Main.scss'

export default function Main(props) {

  if(props.redirect) {
    let redirect = props.redirect
    props.setRedirect(null)
    return <Redirect to={redirect} />
  }

  return (
    <main>
      <div className='options' >
        <div>
          <a href="/help">
          <section>
            <FontAwesomeIcon icon={faDonate} size="6x"/>
            <h1>Donate</h1>
          </section>
          </a>
        </div>
        
        <div>
          <a href="/foster">
          <section>
            <FontAwesomeIcon icon={faHandshake} size="6x"/>
            <h1>Foster</h1>
          </section>
          </a>
        </div>
        <div>
          <a href="/animals">
          <section>
            <FontAwesomeIcon icon={faPaw} size="6x"/> 
            <h1>Adopt A Dog</h1>
          </section>
          </a>
        </div>
        <div>
          <a href="/animals">
          <section>
            <FontAwesomeIcon icon={faPaw} size="6x"/> 
            <h1>Adopt A Cat</h1>
          </section>
        </a>
        </div>
      </div>
      {props.children}
    </main>
  )
}

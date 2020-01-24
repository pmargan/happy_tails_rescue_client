import React from 'react'

import '../stylesheets/Main.scss'

export default function Main(props) {
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

import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

import '../stylesheets/Footer.scss'

function Footer() {
  return (
    <footer>
      <>
      <div>
      <p>ABN: 30445110695</p>
      <p>Charity Number: IA56953</p>
      <p>BIN: BIN0000561500753</p>
      </div>
      <div>
      <FontAwesomeIcon icon={faFacebook} size="2x"/>
      <FontAwesomeIcon icon={faInstagram} size="2x"/>
      <FontAwesomeIcon icon={faEnvelopeSquare} size="2x"/>
      </div>
      </>
    </footer>
  )
}

export default Footer

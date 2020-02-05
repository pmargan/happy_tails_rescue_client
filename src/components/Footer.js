import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import '../stylesheets/Footer.scss'

function Footer() {
  return (
    <footer>
      <>
      <div className='info'>
      <p>ABN: 30445110695</p>
      <p>Charity Number: IA56953</p>
      <p>BIN: BIN0000561500753</p>
      </div>
      <div>
        <a href="https://www.facebook.com/happytailsanimalrescueinc/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        <a href="https://www.instagram.com/happytailsanimalrescueinc/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
      </div>
      <div>
        <h6>Happy Tails Animal Rescue Inc ©2020</h6>
      </div>
      </>
    </footer>
  )
}

export default Footer

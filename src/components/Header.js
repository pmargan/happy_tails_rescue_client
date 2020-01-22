import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/Header.scss'

function Header() {

  const [hamburger, setHamburger] = useState(false)

  return (
    <nav className='Header'>
      <ul className={'navList' + (hamburger ? ' show' : '')}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/programs'>Happy Tails Programs</Link>
        </li>
        <li>
          <Link to='/adopt'>Adopt</Link>
        </li>
        <li>
          <Link to='/foster'>Foster</Link>
        </li>
        <li>
          <Link to='/help'>Help Us</Link>
        </li>
        <li>
          <Link to='/vets'>Our Vets</Link>
        </li>
        <li>
          <Link to='/events'>Events</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={() => setHamburger(!hamburger)}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  )
}

export default Header

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/Header.scss'

function Header() {

  const [hamburger, setHamburger] = useState(false)

  return (
    <nav className='Header'>
      <ul className={'navList' + (hamburger ? ' show' : '')}>
        <li>
          <Link onClick={() => setHamburger(false)} to='/'>Home</Link>
        </li>
        <li>
          <Link onClick={() => setHamburger(false)} to='/about'>About Us</Link>
        </li>
        <li>
          <Link onClick={() => setHamburger(false)} to='/programs'>Happy Tails Programs</Link>
        </li>
        <li>
          <Link onClick={() => setHamburger(false)} to='/adopt'>Adopt</Link>
        </li>
        <li>
          <Link onClick={() => setHamburger(false)} to='/foster'>Foster</Link>
        </li>
        <li>
          <Link onClick={() => setHamburger(false)} to='/help'>Help Us</Link>
        </li>
        <li>
          <Link onClick={() => setHamburger(false)} to='/vets'>Our Vets</Link>
        </li>
        <li>
          <Link onClick={() => setHamburger(false)} to='/events'>Events</Link>
        </li>
        <li>
          <Link onClick={() => setHamburger(false)} to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className={'hamburger' + (hamburger ? ' close' : '')} onClick={() => setHamburger(!hamburger)}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  )
}

export default Header

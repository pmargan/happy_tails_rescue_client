import React, { useState, useRef } from 'react'

import Form from '../helpers/Form'
import api from '../../API'

export default function Register(props) {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmationRef = useRef(null)
  
  const [availiable, setAvailiable] = useState(false)

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

  const checkAvailiability = () => {
    return validateEmail(emailRef.current.value) && 
    passwordRef.current.value === passwordConfirmationRef.current.value &&
    passwordRef.current.value.length >= 8
  }

  const onChange = () => {
    setAvailiable(checkAvailiability())
  }

  const onSubmit = data => {
    api.post('/auth/register', data)
    .then(res => {
      localStorage.setItem('authToken', res.data.authToken)
      console.log(res.data.user)
    })
  }

  return (
    <div className='Register mainContainer' >
      <Form onSubmit={onSubmit} >
        <div>
          <table className='formTable'>
            <tbody>
              <tr>
                <td><label>Email: </label></td>
                <td><input ref={emailRef} type='text' name='email' onChange={onChange} /></td>
              </tr>
              <tr>
                <td><label>Password: </label></td>
                <td><input ref={passwordRef} type='password' name='password' onChange={onChange} /></td>
              </tr>
              <tr>
                <td><label>Password Confirmation: </label></td>
                <td><input ref={passwordConfirmationRef} type='password' name='passwordConfirmation' onChange={onChange} /></td>
              </tr>
            </tbody>
          </table>
          <button disabled={!availiable} >Sign Up</button>
        </div>
      </Form>
    </div>
  )
}

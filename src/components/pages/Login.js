import React from 'react'

import Form from '../helpers/Form'
import api from '../../API'

export default function Login(props) {
  const onSubmit = (data) => {
    api.post('/auth/login', data)
    .then(res => {
      console.log(res.data.user)
    })
  }

  return (
    <div className='Login mainContainer' >
      <Form onSubmit={onSubmit} >
        <div>
          <label>Email: </label>
          <input type='text' name='email' />
          <label>Password: </label>
          <input type='password' name='password' />
          <button>Sign In</button>
        </div>
      </Form>
    </div>
  )
}

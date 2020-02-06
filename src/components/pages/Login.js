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
          <table className='formTable'>
            <tbody>
              <tr>
                <td><label>Email: </label></td>
                <td><input type='text' name='email' /></td>
              </tr>
              <tr>
                <td><label>Password: </label></td>
                <td><input type='password' name='password' /></td>
              </tr>
            </tbody>
          </table>
          
          <button>Sign In</button>
        </div>
      </Form>
    </div>
  )
}

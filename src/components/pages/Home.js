import React from 'react'

import '../../stylesheets/pages/Home.scss'

import Form from '../helpers/Form'

function Home() {

  return (
    <>
      <Form className='myForm' onSubmit={(data) => {console.log(data)}}>
        <div>
          <div>
            <label>Hello:</label>
            <input type='text' name='Hello' />
          </div>
          <div>
            <label>World:</label>
            <input type='text' name='World' />
            <label>TextArea:</label>
            <textarea type='text' name='TextArea' />
            <select multiple name='select' >
              <option value='1' >1</option>
              <option value='2' >2</option>
              <option value='3' >3</option>
              <option value='4' >4</option>
            </select>
          </div>
          <button>Next</button>
        </div>
        <div>
          <div>
            <label>Does:</label>
            <input type='text' name='Does' />
          </div>
          <div>
            <label>This:</label>
            <input type='text' name='This' />
          </div>
          <div>
            <label>Work:</label>
            <input type='text' name='Work' />
          </div>
          <button>Submit</button>
        </div>
      </Form>
    </>
  )
}

export default Home

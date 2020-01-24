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

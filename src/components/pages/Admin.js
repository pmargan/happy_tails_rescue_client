import React, {useState, useReducer, useEffect} from 'react'
import axios from 'axios'

import Form from '../helpers/Form'

export default function Admin(props) {

  const [dynamicText, setDynamicText] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {}
  )

  useEffect(() => {
    
  }, [])

  const saveDynamicText = (formData) => {
    axios.post()
  }

  return (
    <>
      <Form className='' onSumbit={saveDynamicText}>
        <div>
          
        </div>
      </Form>
    </>
  )
}
import React, {useState, useReducer, useEffect} from 'react'
import axios from 'axios'

import Form from '../helpers/Form'

import '../../stylesheets/pages/Admin.scss'

function ParagraphForm(props) {
  return (
    <>
      <div>
        <label>Title:</label>
        <input type='text' name={`${props.page}[title]`} id='title' onChange={(e) => props.onTitleChange(e, props.page, props.index)} value={props.title || ''} />
      </div>
      <div>
        <label>Text:</label>
        <textarea className='textArea' type='text' name={`${props.page}[text[]]`} onChange={(e) => props.onTextChange(e, props.page, props.index)} value={props.value || ''} rows="6" />
      </div>
      <br />
    </>
  )
}

export default function Admin(props) {

  const [dynamicText, setDynamicText] = useReducer(
    (state, action) => {
      return {
        ...state,
        [action.type]: action.data
      }
    },
    {
      welcomePage: [

      ],
      contactPage: [

      ],
      communityPrograms: [

      ],
      foster: [

      ],
      volunteer: [

      ],
      adopt: [

      ]
    }
  )

  useEffect(() => {
    axios.get('http://localhost:3001/text')
      .then(result => {
        let text = result.data.reduce((acc, page) => {
          acc[page.id] = page.value
          return acc
        }, {})
        for(let key of Object.keys(text)){
          setDynamicText({type: key, data: text[key]})
        }
      })
  }, [])

  const saveDynamicText = (formData) => {
    axios.post()
  }

  const onTextChange = (e, type, index) => {
    let arr = [...dynamicText[type]]
    arr[index].value = e.target.value
    setDynamicText({type: type, data: arr})
  }

  const onTitleChange = (e, type, index) => {
    let arr = [...dynamicText[type]]
    arr[index].title = e.target.value
    setDynamicText({type: type, data: arr})
  }

  return (
    <div className='Admin mainContainer' >
      <Form className='' onSumbit={saveDynamicText}>
      <div>
          {dynamicText.welcomePage.map((paragraph, i) => (
            <ParagraphForm key={paragraph._id} page='welcomePage' onTextChange={onTextChange} onTitleChange={onTitleChange} {...paragraph} index={i} />
          ))}
        </div>
      </Form>
    </div>
  )
}
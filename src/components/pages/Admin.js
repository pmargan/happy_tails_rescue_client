import React, {Fragment, useReducer, useEffect} from 'react'
import axios from 'axios'

import Form from '../helpers/Form'

import '../../stylesheets/pages/Admin.scss'
import { Switch, Route, Link } from 'react-router-dom'

function ParagraphForm(props) {
  return (
    <>
      <div>
        <label>Title:</label>
        <input type='text' name={`${props.page}[title]`} onChange={(e) => props.onTitleChange(e, props.page, props.index)} value={props.title || ''} />
      </div>
      <div>
        <label>Text:</label>
        <textarea type='text' name={`${props.page}[text[]]`} onChange={(e) => props.onTextChange(e, props.page, props.index)} value={props.value || ''} rows="6" className='textArea' />
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
      welcomePage: [],
      contactPage: [],
      communityPrograms: [],
      foster: [],
      volunteer: [],
      adopt: []
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
    axios.put('http://localhost:3001/text', {
      ...dynamicText
    })
  }

  const onTextChange = (e, type, index) => {
    let arr = [...dynamicText[type]]
    arr[index].value = e.target.value
    setDynamicText({type: type, data: arr})
  }

  const onTitleChange = (e, type, index) => {
    console.log('changed title')
    let arr = [...dynamicText[type]]
    arr[index].title = e.target.value
    setDynamicText({type: type, data: arr})
  }

  return (
    <>
      <ul className='InnerList' >
      {Object.keys(dynamicText).map(key => (
        <li key={key}>
          <Link to={`/admin/${key}`} >{key}</Link>
        </li>
      ))}
    </ul>
      <div className='Admin mainContainer' >
        <Switch>
          {Object.keys(dynamicText).reverse().map((key, i, arr) => (
            <Route path={`/admin${i === arr.length - 1 ? '' : `/${key}`}`}>
              <Form className='' onSubmit={saveDynamicText}>
                <div>
                    <Fragment>
                      <h1>{key}</h1>
                      <br />
                      {dynamicText[key].map((paragraph, i) => (
                        <ParagraphForm key={paragraph._id} page={key} onTextChange={onTextChange} onTitleChange={onTitleChange} {...paragraph} index={i} />
                      ))}
                      <hr/>
                      <br />
                      <br />
                    </Fragment>
                  <button>Save</button>
                </div>
              </Form>
            </Route>
          ))}
        </Switch>
      </div>
    </>
  )
}

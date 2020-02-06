import React, {useReducer, useEffect, useState} from 'react'
import api from '../../API'

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

  const [vets, setVets] = useState([])

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
    api.get('/text')
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

  useEffect(() => {
    api.get('/vets')
      .then(result => {
        setVets(result.data)
      })
  }, [])

  const saveDynamicText = (formData) => {
    api.put('/text', {
      ...dynamicText
    })
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

  const saveNewVet = data => {
    console.log(data)
    api.post('/vets', data)
  }

  return (
    <>
      <ul className='innerList' >
      {Object.keys(dynamicText).map(key => (
        <li key={key}>
          <Link to={`/admin/${key}`} >{key}</Link>
        </li>
      ))}
      <li><Link to={`/admin/vets`} >Vets</Link></li>
    </ul>
      <div className='Admin mainContainer' >
        <Switch>
          <Route path={`/admin/vets`}>
            <Form className='' onSubmit={saveNewVet}>
              <div>
                <h1>Vets</h1>
                <br />
                {vets.map(vet => (
                  <div>
                    {vet.location}
                  </div>
                ))}
                <br />
                <h1>New Vet</h1>
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td><label>Location: </label></td>
                      <td><input type='text' name='location' /></td>
                    </tr>
                    <tr>
                      <td><label>Website Link: </label></td>
                      <td><input type='text' name='link' /></td>
                    </tr>
                    <tr>
                      <td><label>Photo: </label></td>
                      <td><input type='file' name='images' /></td>
                      <td><input type='text' name='fieldname' value='images' readOnly hidden /></td>
                    </tr>
                  </tbody>
                </table>

                <button>Submit</button>
              </div>
            </Form>
          </Route>
          {Object.keys(dynamicText).reverse().map((key, i, arr) => (
            <Route path={`/admin${i === arr.length - 1 ? '' : `/${key}`}`}>
              <Form className='' onSubmit={saveDynamicText}>
                <div>
                    <>
                      <h1>{key}</h1>
                      <br />
                      {dynamicText[key].map((paragraph, i) => (
                        <ParagraphForm key={paragraph._id} page={key} onTextChange={onTextChange} onTitleChange={onTitleChange} {...paragraph} index={i} />
                      ))}
                      <hr/>
                      <br />
                      <br />
                    </>
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

import React, {useState, useReducer, useRef, useEffect} from 'react'
import axios from 'axios'

export default function Form(props) {

  const [page, setPage] = useState(0)
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {}
  )
  const formRef = useRef(null)

  useEffect(() => {
    Array.from(formRef.current.getElementsByTagName('input')).forEach(el => {
      el.value = userInput[el.name] || ''
      setUserInput({[el.name]: userInput[el.name] || ''})
      el.addEventListener('input', handleChange)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const handleChange = (e) => {
    const name = e.target.name
    const newValue = e.target.value
    setUserInput({[name]: newValue})
  }


  const onSubmit = (e) => {
    e.preventDefault()
    if(React.Children.count(props.children) <= page + 1) {
      props.onSubmit(userInput)
      //handleFormSubmit(userInput)
    }
    setPage(page+1)
  }

  return (
    <form className={props.className} ref={formRef} onSubmit={onSubmit}>
      {React.Children.toArray(props.children)[page]}
      {React.Children.count(props.children) <= page && (
        <img className='loading' src='loading GIF' alt='loadingGIF' />
      )}
    </form>
  )
}

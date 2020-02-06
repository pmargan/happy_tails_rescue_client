import React, {useState, useReducer, useRef, useEffect} from 'react'

export default function Form(props) {

  const [page, setPage] = useState(0)
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {}
  )
  const formRef = useRef(null)

  const setupElements = (el) => {
    let value = el.value || userInput[el.name] || ''

    if(el.type === 'checkbox') {
      value = el.checked
    }

    if(el.type === 'select-multiple') {
      value = Array.from(el.selectedOptions).map(option => option.value)
    }

    el.value = value

    setUserInput({[el.name]: value})
    el.addEventListener('input', handleChange)
  }

  useEffect(() => {
    Array.from(formRef.current.getElementsByTagName('input')).forEach(setupElements)
    Array.from(formRef.current.getElementsByTagName('textArea')).forEach(setupElements)
    Array.from(formRef.current.getElementsByTagName('select')).forEach(setupElements)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const handleChange = (e) => {
    const name = e.target.name
    let newValue = e.target.value

    if(e.target.type === 'checkbox') {
      newValue = e.target.checked
    }

    if(e.target.type === 'file') {
      newValue = e.target.files
    }

    if(e.srcElement.type === 'select-multiple') {
      newValue = Array.from(e.srcElement.selectedOptions).map(option => option.value)
    }

    setUserInput({[name]: newValue})
  }


  const onSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData()

    Object.keys(userInput).forEach(key => {
      if(key === 'images') {
        for(let i = 0; i < userInput[key].length; i++) {
          formData.append(key, userInput[key][i])
        }
      } else {
        formData.append(key, userInput[key])
      }
    })

    if(React.Children.count(props.children) <= page + 1) {
      props.onSubmit(formData)
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

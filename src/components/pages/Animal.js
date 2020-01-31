import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Animal(props) {

  const [image, setImage] = useState(0)
  const [images, setImages] = useState(0)
  const [animal, setAnimal] = useState(null)

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3001/animals/profile/:id')
        .then(result => {
          console.log(result)
          setAnimal(result.data.value)
        })
    }
    getData()
  }, [])

  const getNextImg = () => {
    return images[(image+1) % images.length]
  }

  const getPrevImg = () => {
    return images[image === 0 ? images.length - 1: image - 1]
  }

  const nextImg = () => {
    setImage((image+1) % images.length)
  }

  const prevImg = () => {
    setImage(image === 0 ? images.length - 1: image - 1)
  }

  return animal ? (
    <>
    <div className="Animals">
      
      {animal.map(text => (
        <>
          <h1>{text.name}</h1>
          <p>{text.value}</p>
          <br/>
        </>
      ))}
    </div>
      <div className='carousal' >

        <button onClick={prevImg} >{'<'}</button>
        <img src={images[image]} alt={`animal${image}`} />
        <button onClick={nextImg} >{'>'}</button>

        <div className='otherImgs' >
          <img onClick={prevImg} src={getPrevImg()} alt={`animal next`} />
          <img src={images[image]} alt={`animal current`} />
          <img onClick={nextImg} src={getNextImg()} alt={`animal previous`} />
        </div>
      </div>
    </>
  ) : (
    <p>nothing here yet</p>
  )
}
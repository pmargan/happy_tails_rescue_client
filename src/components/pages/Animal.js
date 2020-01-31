import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";

import Carousel from '../helpers/Carousel'

import '../../stylesheets/pages/Animal.scss'

export default function Animal(props) {

  const [images, setImages] = useState([
    'https://media.gettyimages.com/photos/abstract-network-background-picture-id836272842?s=2048x2048',
    'https://media.gettyimages.com/photos/particle-wave-picture-id1017380290?s=2048x2048',
    'https://media.gettyimages.com/photos/abstract-curly-tendrils-background-picture-id888421376?s=2048x2048',
    'https://media.gettyimages.com/photos/abstract-background-of-spheres-and-wireframe-landscape-picture-id1017193718?s=2048x2048',
    'https://media.gettyimages.com/photos/abstract-colorful-background-freezelight-curves-picture-id1018897260?s=2048x2048'
  ])
  const [animal, setAnimal] = useState()

  let { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/animals/profile/${id}`)
      .then(result => {
        setAnimal(result.data)
      })
  }, [])

  return (
    <>
      {animal ? (
        <>
          <div className='animalDetails' >
            <h1>{animal.name}</h1>
          </div>
          <br />
          <Carousel images={images} />
          <div className='animalDetails' >
            <p>{animal.animalType}</p>
            <p>{animal.gender}</p>
            <p>{animal.age} years</p>
            <p>{animal.primaryBreed}</p>
            <p>{animal.size}</p>
            <p>{animal.weight} kg</p>
          </div>
        </>
      ) : (
        <p>nothing here yet</p>
      )}
    </>
  )
}

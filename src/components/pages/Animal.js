import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";

import Carousel from '../helpers/Carousel'

import '../../stylesheets/pages/Animal.scss'

export default function Animal(props) {

  const [animal, setAnimal] = useState()

  let { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/animals/${id}`)
      .then(result => {
        setAnimal(result.data)
      })
  }, [id])

  return (
    <>
      {animal ? (
        <>
          <div className='animalDetails' >
            <h1>{animal.name}</h1>
          </div>
          <br />
          <Carousel images={animal.animalPhotos} />
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

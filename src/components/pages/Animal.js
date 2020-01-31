import React, {useState, useEffect} from 'react'

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
  const [data, setData] = useState({
    "_id": "5e28eee8eb43ad62beb5125e",
    "userId": "",
    "animalPhoto": "http://lorempixel.com/200/200",
    "animalType": "Dog",
    "gender": "Male",
    "microchip": "abc123456789",
    "name": "Budweiser",
    "age": 1.5,
    "primaryBreed": "Corgi",
    "secondaryBreed": "",
    "crossBreed": true,
    "color": "Brown",
    "coatType": "Short",
    "size": "Medium",
    "location": "Tarampa, West Brisbane",
    "friendlyWith": "Dogs (MUST be a calm well balanced dog) and cats (can sometimes get over excited and chase). Kids not recommended.",
    "wouldSuit": "Couple, singles, retirees, families",
    "weight": 8,
    "behaviorNotes": "Needs a confident dog owner as he can be snappy",
    "medicalNotes": "",
    "houseTrained": true,
    "adoptionFee": 450,
    "bin": "BIN0000561500753",
    "desexed": true,
    "vaccinated": true,
    "wormed": true,
    "heartwormTreated": true,
    "dob": "1970-01-01T00:00:00.000Z",
    "extraNotes": "",
    "description": "Budweiser, or Buddy as he is known always greets you with great excitement when you get home",
    "__v": 0
  })

  useEffect(() => {
    // get images
  }, [])

  return (
    <>
      <div className='animalDetails' >
        <h1>{data.name}</h1>
      </div>
      <br />
      <Carousel images={images} />
      <div className='animalDetails' >
        <p>{data.animalType}</p>
        <p>{data.gender}</p>
        <p>{data.age} years</p>
        <p>{data.primaryBreed}</p>
        <p>{data.size}</p>
        <p>{data.weight} kg</p>
      </div>
    </>
  )
}

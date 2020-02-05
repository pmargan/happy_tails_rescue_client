import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"


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
    axios.get(`http://localhost:3001/animals/${id}`)
      .then(result => {
        setAnimal(result.data)
      })
  }, [id])

  return (
    <>
    <div className='mainContainer'>
      {animal ? (
        <>
        <h1>{animal.name}</h1>
        <div className='animalHeader'>
          <div>
          <Carousel images={images} />
          </div>

          <div className='animalDetails' >
            <p>Animal Type: {animal.animalType}</p>
            <p>Gender: {animal.gender}</p>
            <p>Age: {animal.age} years</p>
            <p>Primary Breed: {animal.primaryBreed}</p>
            {animal.secondaryBreed ? (
              <p>Secondary Breed: {animal.secondaryBreed}</p>
            ) : ("")}
            {animal.crossBreed ? (
              <p>Cross Breed: Yes</p>
            ) : ("")}
            <p>Size: {animal.size}</p>
            <p>Approx Weight: {animal.weight} kg</p>
            <p>Color: {animal.color}</p>
            <p>Coat Type: {animal.coatType}</p>
            <p>Where to find me: {animal.location}</p>
            <p>Adoption Fee: ${animal.adoptionFee}</p>
            <hr />
            </div>
        </div>
        <h2>About {animal.name}</h2>
        <div className='otherInfo'>
            <div className='description'>
              
              <p>{animal.description}</p>
              <p>Friendly With: {animal.friendlyWith}</p>
              <p>Would Suit: {animal.wouldSuit}</p>
              <p>Behavior Notes: {animal.behaviorNotes}</p>
              <p>Medical Notes: {animal.medicalNotes}</p>
            </div>
            <div className='animalChecklist'>
            <p>House Trained? <FontAwesomeIcon icon={animal.houseTrained ? faCheck : faTimes} color={animal.houseTrained ? 'green' : 'red' }/></p>
            <p>Desexed? <FontAwesomeIcon icon={animal.desexed ? faCheck : faTimes} color={animal.desexed ? 'green' : 'red' }/></p>
            <p>Vaccinated? <FontAwesomeIcon icon={animal.vaccinated ? faCheck : faTimes} color={animal.vaccinated ? 'green' : 'red' }/></p>
            <p>Wormed? <FontAwesomeIcon icon={animal.wormed ? faCheck : faTimes} color={animal.wormed ? 'green' : 'red' }/></p>
            <p>Heartworm Treated? <FontAwesomeIcon icon={animal.heartwormTreated ? faCheck : faTimes} color={animal.heartwormTreated ? 'green' : 'red' }/></p> 
            <hr />           
            </div>
        </div>    
        <p><strong>** All Happy Tails cats are desexed, microchipped, vaccinated. Flea, worm and tick treatment is provided prior to adoption **</strong></p>
        </>
      ) : (
        <p>nothing here yet</p>
      )}
      </div>
    </>
  )
}

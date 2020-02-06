import React, {useState, useEffect} from 'react'
import api from '../../API'
import { Link } from 'react-router-dom' 
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"


import Carousel from '../helpers/Carousel'

import '../../stylesheets/pages/Animal.scss'

export default function Animal(props) {

  const [animal, setAnimal] = useState()

  let { id } = useParams()

  const approveAnimal = () => {
    api.put(`http://localhost:3001/animals/${animal._id}/approve`)
  }

  const denyAnimal = id => {
    api.delete(`http://localhost:3001/animals/${id}`)
  }

  useEffect(() => {
    api.get(`/animals/${id}`)
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
          <Carousel images={animal.animalPhotos} />
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
            </div> 
          </div>
        <hr />
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
            </div>
        </div>
        <hr />     
        <p><strong>** All Happy Tails cats are desexed, microchipped, vaccinated. Flea, worm and tick treatment is provided prior to adoption **</strong></p>
        {animal.pending ? (
          <>
            <button onClick={approveAnimal} >Approve Animal</button>
            <button onClick={denyAnimal} >Deny Animal</button>
          </>
         ) : (
         <button><Link to={'/adopt'}>Adoption Application</Link></button>
         )}
        </>
      ) : (
        <p>nothing here yet</p>
      )}
      </div>
    </>
  )
}

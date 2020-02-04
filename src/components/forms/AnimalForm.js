import axios from 'axios'
import Form from '../helpers/Form'
import React from 'react'

function AnimalForm() {

  const onFormSubmit = (data) => {
    axios
      .post(
        "http://localhost:3001/animals/register",
        {...data},
        console.log(data)
      )
      .then(something => console.log(something.data))
  };

  return (
    <>
    <Form className='' onSumbit={onFormSubmit} >
      <div>
      <label>Upload Images</label>
      <input id="image-file" type="file" />

      <label>Animal Type</label>
        <select 
          type="string"
          name='animalType'>
          <option value='Dog'>Dog</option>
          <option value='Puppy'>Puppy</option>
          <option value='Cat'>Cat</option>
          <option value='Kitten'>Kitten</option>
        />
        </select>

      <label>Name</label>
        <input
          type="text"
          name='name'
        />
      <label>Description</label>
        <input
          type="text"
          name='description'
        />
      <label>Age</label>
        <input
          type="number"
          name='age'
        />
       <label>Date of Birth</label>
        <input
          type="date"
          name='dob'
        />
      <label>Gender</label>
      <select 
          type="string"
          name='gender'>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        />
        </select>
        <label>Pimary Breed</label>
        <input
          type="string"
          name='primaryBreed'
        />
        <label>Secondary Breed</label>
        <input
          type="string"
          name='secondaryBreed'
        />
         <label>Cross Breed</label>
      <select 
          type="boolean"
          name='crossBreed'>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        />
        <label>Weight</label>
        <input
          type="string"
          name='weight'
        />
        <label>Color</label>
        <input
          type="string"
          name='color'
        />
        <label>Coat Type</label>
        <select 
          type="string"
          name='coatType'>
          <option value='short'>Short</option>
          <option value='medium'>Medium</option>
          <option value='long'>Long</option>
        /></select>
        <label>Size</label>
        <select 
          type="string"
          name='size'>
          <option value='toy'>Toy</option>
          <option value='Small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
          <option value='giant'>Giant</option>
        /></select>
        <label>Microchip</label>
          <input
            type="string"
            name='microchip'
          />
        </select>
        <section><button>Next</button></section>
        
      </div>



  <div>
  <label>Location</label>
        <input
          type="string"
          name='location'
        />
        <label>Friendly With</label>
        <input
          type="string"
          name='friendlyWith'
        />
        <label>Would Suit</label>
        <input
          type="string"
          name='wouldSuit'
        />
        <section><button>Next</button></section>
         
    </div>

    <div>
    <label>Behavior Notes</label>
        <input
          type="string"
          name='behaviorNotes'
        />
        <label>Medical Notes</label>
        <input
          type="string"
          name='medicalNotes'
        />
        <label>House Trained</label>
        <select 
          type="boolean"
          name='houseTrained'>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        />
        </select>
        <label>Desexed</label>
        <select 
          type="boolean"
          name='desexed'>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        />
        </select>
        <label>Vaccinated</label>
        <select 
          type="boolean"
          name='vaccinated'>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        />
        </select>
        <label>Wormed</label>
        <select 
          type="boolean"
          name='wormed'>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        />
        </select>
        <label>Heartworm Treated</label>
        <select 
          type="boolean"
          name='heartwormTreated'>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        />
        </select>
      <section><button>Next</button></section>
         
  </div>


  <div>
    <label>Adoption Fee</label>
        <input
          type="number"
          name='adoptionFee'
        />
        <label>Breeder ID Number</label>
        <input
          type="string"
          name='bin'
          defaultValue='BIN0000561500753'
        />
        <label>House Trained</label>
        <select 
          type="boolean"
          name='houseTrained'>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        />
        </select>
        <section><button>Next</button></section>
         
  </div>


<div>
  <label>Other Notes</label>
        <input
          type="string"
          name='otherNotes'
        />
        <section><button>Submit</button></section>
    
  </div>
</Form>
</>
  )
}

export default AnimalForm
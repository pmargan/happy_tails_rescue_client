import React, {} from 'react'
import axios from 'axios'

import Form from '../helpers/Form'

import '../../stylesheets/pages/AddAnimal.scss'

export default function AddAnimal(props) {

  const submitForm = (data) => {
    axios.post('http://localhost:3001/animals/test', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
    .then(res => {
      console.log(res)
    })
  }

  return (
    <div className='addAnimal mainContainer' >
      <Form className='newAnimalForm' onSubmit={submitForm}>
        <div>
          <table className='newAnimalFormLayout' ><tbody>
            <tr>
              <td><label>Name: </label></td>
              <td><input type='text' name='name' /></td>
            </tr>
            <tr>
              <td><label>Type: </label></td>
              <td>
                <select name='animalType' >
                  <option value='cat'>cat</option>
                  <option value='dog'>dog</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Gender: </label></td>
              <td>
                <div className='radio' >
                  <div>
                    <input type='radio' name='gender' value='male' />
                    <label> Male</label>
                  </div>
                  <div>
                    <input type='radio' name='gender' value='female' />
                    <label> Female</label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><label>Microchip: </label></td>
              <td><input type='number' name='microchip' /></td>
            </tr>
            <tr>
              <td><label>Age: </label></td>
              <td><input type='number' name='age' /></td>
            </tr>
            <tr>
              <td><label>DoB: </label></td>
              <td><input type='text' name='dob' /></td>
            </tr>
            <tr>
              <td><label>Breeder Identification Number: </label></td>
              <td><input type='number' name='bin' /></td>
            </tr>
            <tr>
              <td><label>Photos: </label></td>
              <td><input type='file' name='images' multiple/></td>
              <td><input type='text' name='fieldname' value='images' readOnly hidden /></td>
            </tr>
          </tbody></table>

          <button>Next</button>
        </div>

        <div>
          <table className='newAnimalFormLayout' ><tbody>
            <tr>
              <td><label>Primary Breed: </label></td>
              <td><input type='text' name='primaryBreed' /></td>
            </tr>
            <tr>
              <td><label>Secondary Breed: </label></td>
              <td><input type='text' name='secondaryBreed' /></td>
            </tr>
            <tr>
              <td><label>Cross Breed: </label></td>
              <td><input type='checkbox' name='crossBreed' /></td>
            </tr>
            <tr>
              <td><label>Color: </label></td>
              <td><input type='text' name='color' /></td>
            </tr>
            <tr>
              <td><label>Coat Type: </label></td>
              <td><input type='text' name='coatType' /></td>
            </tr>
            <tr>
              <td><label>Size: </label></td>
              <td>
                <select name='size' >
                  <option value='small'>small</option>
                  <option value='medium'>medium</option>
                  <option value='large'>large</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Weight: </label></td>
              <td><input type='number' name='weight' /></td>
            </tr>
            <tr>
              <td><label>Location: </label></td>
              <td><input type='text' name='location' /></td>
            </tr>
          </tbody></table>

          <button>Next</button>
        </div>

        <div>
          <table className='newAnimalFormLayout' ><tbody>
            <tr>
              <td><label>Friendly With: </label></td>
              <td><input type='text' name='friendlyWith' /></td>
            </tr>
            <tr>
              <td><label>Would Suit: </label></td>
              <td><input type='text' name='wouldSuit' /></td>
            </tr>
            <tr>
              <td><label>Behavior Notes: </label></td>
              <td><input type='text' name='behaviorNotes' /></td>
            </tr>
            <tr>
              <td><label>Description: </label></td>
              <td><input type='text' name='description' /></td>
            </tr>
            <tr>
              <td><label>Extra Notes: </label></td>
              <td><input type='text' name='extraNotes' /></td>
            </tr>
          </tbody></table>

          <button>Next</button>
        </div>

        <div>
          <table className='newAnimalFormLayout' ><tbody>
            <tr>
              <td><label>Desexed: </label></td>
              <td><input type='checkbox' name='desexed' /></td>
            </tr>
            <tr>
              <td><label>Vaccinated: </label></td>
              <td><input type='checkbox' name='vaccinated' /></td>
            </tr>
            <tr>
              <td><label>Wormed: </label></td>
              <td><input type='checkbox' name='wormed' /></td>
            </tr>
            <tr>
              <td><label>Heart Worm Treated: </label></td>
              <td><input type='checkbox' name='heartwormTreated' /></td>
            </tr>
          </tbody></table>

          <button>Submit</button>
        </div>
      </Form>
    </div>
  )
}

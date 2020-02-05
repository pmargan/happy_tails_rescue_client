import axios from 'axios'
import Form from '../helpers/Form'
import React, { useState, useEffect } from 'react'
import Paragraph from '../helpers/Paragraph'
import '../../stylesheets/pages/Adopt.scss'


function AdoptForm() {

  const onFormSubmit = (data) => {
    axios
      .post(
        "http://localhost:3001/text/adoption",
        {...data},
        console.log(data)
      )
      .then(something => console.log(something.data))
  }

  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/text/adopt')
      .then(result => {
        setDynamicText(result.data.value)
      })
  }, [])

  return dynamicText ? (
    <>
    <>
    <div className="About mainContainer">
      <h1>Adopt</h1>
      <br />
      {dynamicText.map(text => (
        <Paragraph {...text} key={text._id} />
      ))}
    </div>
    </>

    <Form className='AdoptForm mainContainer' 
          onSubmit={onFormSubmit}
          >
      <div>
          <h1>Applicant details</h1>
          
          <label>First Name</label>
        <input
          type="string"
          name='firstName'
        />
          <label>Last Name</label>
        <input
          type="string"
          name='LastName'
        />
          <label>Contact Number</label>
        <input
          type="number"
          name='contactNumber'
          />
          <label>Email</label>
        <input
          type="string"
          name='email'
          />
        <label >Street Address</label>
        <input
          type="string"
          name='addressStreet'
          />
          <label >Suburb</label>
          <input
          type="string"
          name='addressSuburb'
          />
          <label >Postcode</label>
          <input
          type="number"
          name='addressPostcode'
          />
          <label>How did you hear about Happy Tails?</label>
        <select 
          type="string"
          name='hearAboutUs'>
          <option value='Facebook'>Facebook</option>
          <option value='Pet Rescue'>Pet Rescue</option>
          <option value='Friends or Family'>Friends or Family</option>
          <option value='Event'>Event</option>
          <option value='SavourLife'>Savour Life</option>
        </select>
        <section><button>Next</button></section>
        
      </div>



      <div>
      <h1>Animal Details</h1>
         <label>What type of animal do you wish to adopt?</label>
          <select
          type="string" 
          name="type">
          <option value='Dog'>Dog</option>
          <option value='Cat'>Cat</option>
          </select>
          <label>Name</label>
          <input
            type="string"
            name='name'
          />
          <label>Age</label>
          <input
            type="number"
            name='age'
          />
          <label>Breed</label>
          <input
            type="string"
            name='breed'
          />
          <label>Why do you want to adopt a (Cat or Dog)? (eg companion for yourself /other pet /for children / watchdog etc)</label>
          <textarea className='largeText'
            type="string"
            name='whyAdopt'
          />
          <label>Please tell us why you have applied to adopt this specific (Cat or Dog)? </label>
          <textarea className='largeText'
            type="string"
            name='whyThisAnimal'
          />
          <label>What characteristics in a (Cat or Dog) are most desirable to you? }? </label>
          <textarea className='largeText'
            type="string"
            name='desirableCharacteristics'
          />
          <label>What characteristics in a (Cat or Dog) are least desirable to you? </label>
          <textarea className='largeText'
            type="string"
            name='undesirableCharacteristics'
          />
          <section><button>Next</button></section>
    </div>



    <div>
      <h1>Home Environment</h1>
  <label>What is your living arrangement?</label>
        <select
        type="string" 
        name="houseOwnership">
        <option value='I own my own home'>I own my own home</option>
        <option value='I rent but have permission from real estate, landlord or body corp to have pet'>I rent but have permission from real estate, landlord or body corp to have pet</option>
        <option value='I rent and do not have currently have permission (will seek asap)'>I rent and do not have currently have permission (will seek asap)</option>
        </select>,

        <label>Please describe what the (Cat or Dog)s living arrangements and environment would be during the day and at night.</label>
        <textarea className='largeText'
          type="string"
          name='livingArrangementDayNight'
        />

        {/* hide this one for cats */}
        <label>Please describe your home (house, apartment, acreage etc) and yard size including fence height and material: </label>
        <textarea className='largeText'
          type="string"
          name='describeHomeFencing'
        />
        <label>Do you have any pets of your own? Please tell us about them (Animal type, breed, sex, ages). </label>
        <textarea className='largeText'
          type="string"
          name='otherPets'
        />
        <label>Are your pets up to date with vetwork? (Desexed, microchipped, vaccinated yearly, worm and flea treatment monthly). If not, please describe why below</label>
        <textarea className='largeText'
          type="string"
          name='otherPetsVetwork'
        />
        <label>Please describe the humans who lives with you or visit often (age etc)</label>
        <textarea className='largeText'
          type="string"
          name='otherPeople'
        />
        <section><button>Next</button></section>
         
    </div>


    <div>
      <h1>Your Lifestyle</h1>
      <label>How often will your animals be left at home alone? </label>
        <textarea className='largeText'
          type="string"
          name='homeAloneHours'
        />

        {/* if (this.state.type == 'Cat' || 'Kitten') { */}
        {/* hide this one for cats */}
        <label>How much exercise would you and your dog do together?</label>
        <select
        type="string" 
        name="houseOwnership">
        <option value='We would go on a run/jog each day'>We would go on a run/jog each day</option>
        <option value='We would go on a walk each day'>We would go on a walk each day</option>
        <option value='We would go walking a few days a week'>We would go walking a few days a week</option>
        <option value='We would throw a ball around the yard each day'>We would throw a ball around the yard each day</option>
        <option value='We would visit the dog park most days'>We would visit the dog park most days</option>
        <option value='We would not do any exercise'>We wouldn't do any exercise</option>
        </select>
        {/* } */} 

        <label>When you go on holidays, what will happen to your pet? Please provide details:</label>
        <textarea className='largeText'
          type="string"
          name='holidays'
        />
        <section><button>Next</button></section>
         
    </div>




    <div>
      <h1>Serious Stuff</h1>
      <label>Have you had to surrender or re-home a pet before? If yes please give details: </label>
        <textarea className='largeText'
          type="string"
          name='surrenderAnAnimal'
        />

        <label>Have you ever been refused adoption/purchase of an animal through anyshelter, rescue group or breeder? If yes, please specify who and why below:</label>
        <textarea className='largeText'
          type="string"
          name='refusedAnAnimal'
        />

  <label>Under what circumstances would you consider giving away/surrendering this dog?</label>
        <select
        type="string" 
        name="surrenderCirumstances">
        <option value='Moving home'>Moving home</option>
        <option value='Moving interstate'>Moving interstate</option>
        <option value='Moving overseas'>Moving overseas</option>
        <option value='New child'>New child</option>
        <option value='New dog/cat that does not like this dog'>New dog/cat that does not like this (Cat or Dog)</option>
        <option value='Family member develops allergies'>Family member develops allergies</option>
        <option value='New partner does not like this dog'>New partner does not like this (Cat or Dog)</option>
        <option value='The (Cat or Dog) became sick'>The (Cat or Dog) became sick</option>
        <option value='Bad behaviour developed such as barking, digging, chewing etc'>Bad behaviour developed such as barking, digging, chewing etc</option>
        <option value='None of the above - I would be committed to this (Cat or Dog) for life'>None of the above - I would be committed to this (Cat or Dog) for life</option>
        </select>
        <label>Do you give us permission to perform a home check if we feel that it is needed? ie to check fencing is suitable</label>
        <select
        type="string" 
        name="homeCheck">
        <option value=''></option>
        <option value='true'>Yes</option>
        <option value='false'>No</option>
        </select>
        <label>If you adopt from us, would you be willing to provide the occasional update on the dog’s progress to be used on our Facebook page and newsletter (quick email and a photo here and there?)</label>
        <select
        type="string" 
        name="updates">
        <option value=''></option>
        <option value='true'>Yes</option>
        <option value='false'>No</option>
        </select>
        <label>Do you understand and agree that should anything happen in the future that requires you to surrender your dog, that you will contact and surrender back to Happy Tails Animal Rescue Inc. to suitably rehome? </label>
        <select
        type="string" 
        name="returnAnimal">
        <option value=''></option>
        <option value='true'>Yes - I agree to contact Happy Tails Animal Rescue Inc. if I ever need to rehome my (Cat or Dog)</option>
        <option value='false'>No</option>
        </select>
        <label>Is there anything else you would like to tell us about you, your family or your interest in adopting a (Cat or Dog)? The more information you provide, the better we will be able to determine suitability of your chosen (Cat or Dog)(s).</label>
        <textarea className='largeText'
          type="string"
          name='extraInfo'
        />
        <label>I would like to receive newsletters/information in the future from Happy Tails Animal Rescue Inc.</label>
        <select
        type="string" 
        name="newsletter">
        <option value=''></option>
        <option value='true'>Yes</option>
        <option value='false'>No</option>
        </select>
        <section><button>Next</button></section>
    </div>

    <div>
        <h1>Declaration</h1>
        <p>By submitting this application, you agree that ALL information you have provided is correct. You understand that providing untruthful 
            answers or failure to comply with the requirements of this application can result in the refusal of this and future adoption/s.</p>
        <p>You understand that a property check may be required and will be at the discretion of the rescue.</p>
        <p>We reserve the right to refuse any applicant</p>
        <section><button>Next</button></section>
      </div>
      <div>
        <h1>Adoption Contract</h1>

        <p>I understand that Happy Tails Animal Rescue Inc. are the legal owners of all animals until the full adoption fee is paid and all vetwork has been completed.</p>
        <p>I understand that the adoption fee must be paid in full prior to the animal being sent on trial; or in the case of a foster fail, as soon as the adoption application has been received and approved. </p>
        <p>I agree that the animal is being adopted for myself/family member and will not be sold, adopted, or given to another party. </p>
        <p>I agree that the animal will be a companion animal and will live as part of my family.</p>
        <p>I agree to care and house the animal in a humane manner. This includes providing adequate food, water, shelter, enrichment and veterinary care.</p>
        <p>I agree to provide all regular veterinary treatments to my animal; including yearly vaccinations, parasite control and immediate treatment of any illness or injury</p>
        <p>I agree to seek professional advice from a behavioural trainer if this animal develops any serious behavioural issues. </p>
        <p>I agree and understand that it is a Happy Tails Animal Rescue Inc. requirement that the animal is desexed prior to any adoption being finalised.</p>
        <p>If the animal is rehomed with another pet, I agree to carefully supervise them when they are together and will not leave them alone together until I am confident that there will be no conflict. </p>
        <p>I understand that the animal may need extra patience and understanding; and I agree to allow the animal a reasonable time to adjust to new surroundings. </p>
        <p>I agree and understand that I should have a full health check done for this animal by my own vet during the trial period to confirm the health is as stated by 
            Happy Tails Animal Rescue Inc. If my vet identifies issues I will refer this vet report to Happy Tails Animal Rescue Inc. staff and they will seek consultation 
            and treatment (if deemed required) at their approved vets. Any treatment done during this health assessment at a non approved Happy Tails Animal Rescue Inc. 
            vet will not be covered. If I choose not to do this, Happy Tails Animal Rescue Inc. will not be liable for medical expenses. </p>
        <p>I understand and agree that Happy Tails Animal Rescue Inc. will only cover pre-approved veterinary expenses for the animal during the trial period, by a Happy Tails Animal Rescue Inc. authorised 
            Veterinarian. Happy Tails Animal Rescue Inc. will not reimburse any unauthorised expenses before the adoption is finalised.</p>
        <p>I agree to communicate with Happy Tails Animal Rescue Inc.regarding the progress and welfare of this animal if I have any issues or concerns throughout its lifetime</p>
        <p>I agree that if at any point I am unable to keep this animal throughout its lifetime he/she will never be surrendered to or sold to any other person or organisation; 
            I will return him/her to Happy Tails Animal Rescue Inc.without requesting a fee. </p>
        <p>I agree and understand that there will be a minimum of a two week trial period prior to any adoption; longer if deemed suitable by Happy Tails Animal Rescue Inc.. During this time I shall take 
            full responsibility for the animal and will abide by the Happy Tails Animal Rescue Inc. terms and conditions. </p>
        <p>I agree that if I wish to return this animal to Happy Tails Animal Rescue Inc. during the trial period there will a full refund of the adoption fee minus a $50 administration fee. </p>
        <p>I understand that although every animal adopted has been tested for temperament and behaviour, I agree to take on trial/adopt the animal at my own risk and indemnify; and release Happy Tails 
            Animal Rescue Inc., its management committee and volunteers, of any and all liability arising from damages to person(s) or property caused by the animal. </p>
        <p>I agree to keep this animal’s microchip updated and correct at all times. I also agree that Happy Tails Animal Rescue Inc. remain as a second contact on the microchip details of the animal. </p>
        <p>In the case that I have entered into foster to adopt of a pup, I agree to desex at 12-16 weeks of age; unless it is a giant breed. In this case, HTARI committee will discuss with our vets and 
            advise a suitable timeframe. (F2A only) </p>
            <select
        type="boolean" 
        name="agreeAll">

        <option value=''></option>
        <option value='true'>I agree</option>
        <option value='false'>I do not agree</option>
        </select>
        <label>Full Name</label>
        <input
          type="string"
          name='fullName'
          />
        <label>Signature</label>
        <input
          type="string"
          name='sign'
          />
    <section><button>Submit</button></section>
  </div>
</Form>
</>
  ) : (
    <p>nothing here yet</p>
  )
}


export default AdoptForm


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AhtThornlands from '../../img/AhtThornlands.png'
import ToowongFamilyVet from '../../img/ToowongFamilyVet.jpg'
import AspleyVetinaryPractice from '../../img/AspleyVetinaryPractice.png'
import BangalowVets from '../../img/BangalowVets.png'
import Chelmer from '../../img/Chelmer.png'
import EvertonPark from '../../img/EvertonPark.png'
import JVSJimboomba from '../../img/JVSJimboomba.png'
import LittleCrittersBundamba from '../../img/LittleCrittersBundamba.jpg'
import OurVetBrownsPlains from '../../img/OurVetBrownsPlains.jpg'
import OurVetIpswitch from '../../img/OurVetIpswitch.jpg'
import OurVetMinyama from '../../img/OurVetMinyama.jpg'
import OurVetTweedHeadsSouth from '../../img/OurVetTweedHeadsSouth.jpg'
import PetWellnessBurleighHeads from '../../img/PetWellnessBurleighHeads.png'
import SouthSideVetClinic from '../../img/SouthSideVetClinic.png'
import VetLoveBallina from '../../img/VetLoveBallina.png'
import VPVHVictoriaPoint from '../../img/VPVHVictoriaPoint.png'

import '../../stylesheets/pages/Vets.scss'

function VetCard(props) {
  return (
    <a className='vetCardLink' href={props.link} target='_blank' rel="noopener noreferrer">
      <div className='vetCard' >
          {props.location}
          <img src={props.src} alt={props.alt}/>
      </div>
    </a>
  )
}

let vets = [
  {
    link:"https://www.toowongfamilyvet.com.au/",
    location:'Toowong',
    image:ToowongFamilyVet,
    alt:'Toowong Family Vet'
  },
  {
    link:"http://www.vetwell.com.au/chelmer-graceville/",
    location:'Chelmer',
    image: Chelmer,
    alt:'Chelmer Graceville Vet'
  },
  {
    link:"https://www.bestfriendspets.com.au/best-friends-locations/west-ipswich",
    location:'Ipswitch',
    image: OurVetIpswitch,
    alt:'Our Vet Ipswitch'
  },
  {
    link:"https://vpvh.com.au/",
    location:'Victoria Point',
    image:VPVHVictoriaPoint,
    alt:'VPVH Victoria Point'
  },
  {
    link:"https://evertonparkvet.com.au/",
    location:'Everton Park',
    image: EvertonPark,
    alt:'Everton Park Vet'
  },
  {
    link:"http://petwellnesscentres.com.au/",
    location:'Burleigh Heads',
    image:PetWellnessBurleighHeads,
    alt:'Pet Wellness Centre Burleigh Heads'
  },

  {
    link:"https://www.ahtvets.com.au/",
    location:'Thornlands',
    image:AhtThornlands,
    alt:'AHT Thornlands'
  },
  {
    link:"https://www.littlecrittersvet.com.au/contact-us/",
    location:'Bundamba',
    image:LittleCrittersBundamba,
    alt:'Little Critters'
  },
  {
    link:"https://www.bestfriendspets.com.au/best-friends-locations/browns-plains",
    location:'Browns Plains',
    image:OurVetBrownsPlains,
    alt:'Our Vet'
  },
  {
    link:"https://www.bestfriendspets.com.au/best-friends-locations/tweed-heads-nsw",
    location:'Tweed Heads',
    image:OurVetTweedHeadsSouth,
    alt:'Our Vet Tweed Heads South'
  },
  {
    link:"https://www.bestfriendspets.com.au/best-friends-locations/kawana",
    location:'Kawana/Minyama',
    image:OurVetMinyama,
    alt:'Our Vet Kawana/Minyama'
  },
  {
    link:"https://www.bangalowvets.com.au/",
    location:'Bangalow',
    image:BangalowVets,
    alt:'Bangalow Vets'
  },
  {
    link:"https://jimboombavetsurgery.com.au/",
    location:'Jimboomba',
    image:JVSJimboomba,
    alt:'JVS Jimboomba'
  },
  {
    link:"http://www.vetwell.com.au/aspley/",
    location:'Aspley',
    image:AspleyVetinaryPractice,
    alt:'Aspley Vetinary Practice'
  },
  {
    link:"http://southsidevetclinic.com.au/contact-us/",
    location:'Loganholme',
    image:SouthSideVetClinic,
    alt:'Southside Vet Clinic'
  },
  {
    link:"https://vetlove.com.au/ballina-vet-clinic/",
    location:'Ballina',
    image: VetLoveBallina,
    alt:'Vet Love Ballina'
  }
]


function Vets(props) {

  const [vets, setVets] = useState([])

  const [dynamicText, setDynamicText] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/text/vets')
      .then(result => {
        setDynamicText(result.data.value)
      })
      axios.get('http://localhost:3001/vets')
        .then(result => {
          setVets(result.data)
        })
  }, [])

  return (
    <div className="Vets mainContainer" >
      <p>
        These vets support Happy Tails Animal Rescue Inc. in their mission to  
        rehabilitate and rehome animals in need.  Click on the picture  to be
        taken directly to their website.
      </p>
      {vets.map(vet => (
        <VetCard {...vet} />
      ))}
    </div>
  )
}

export default Vets

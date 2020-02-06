import React, {useState, useEffect} from 'react'

import axios from 'axios'

export default function Animals(props) {

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/animals/approved')
      .then(res => {
        setAnimals(res.data)
      })
  }, [])

  return (
    <>
      <MultiPageAnimals animals={animals} redirect={props.redirect} />
    </>
  )
}

export function MultiPageAnimals(props) {

  const aPerPage = 6
  const [pageNum, setPageNum] = useState(0)

  return (
    <>
      <div className='animals'>
        {props.animals.slice(pageNum*aPerPage, pageNum*aPerPage+aPerPage).map(animal => (
          <div key={animal._id} onClick={() => props.redirect(`animal/${animal._id}`)} >
            <img src={animal.animalPhotos[0]} alt='animal' />
            <h3>{animal.name}</h3>
            <p>{`${animal.primaryBreed}${animal.secondaryBreed ? ` / ${animal.secondaryBreed}` : ''}`}</p>
          </div>
        ))}
      </div>
      <div className='changePage'>
        <div>
          <button
            onClick={() => setPageNum(pageNum - 1)}
            disabled={pageNum === 0}
          >
            {'<'}
          </button>
          <p>{pageNum + 1}</p>
          <button
            onClick={() => setPageNum(pageNum + 1)}
            disabled={(pageNum + 1) * aPerPage >= props.animals.length}
          >
            {'>'}
          </button>
        </div>
      </div>
    </>
  )
}
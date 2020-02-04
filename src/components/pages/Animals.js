import React, {useState, useEffect} from 'react'

import axios from 'axios'

export default function Animals(props) {

  const aPerPage = 6

  const [animals, setAnimals] = useState([])
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/animals')
      .then(res => {
        console.log(res.data[0])
        setAnimals(res.data)
      })
  }, [])
  
  return (
    <>
      <div className='animals'>
          {animals.slice(pageNum*aPerPage, pageNum*aPerPage+aPerPage).map(animal => (
            <div key={animal._id} onClick={() => props.redirect(`animal/${animal._id}`)} >
              <img src={animal.image} alt='animal' />
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
              disabled={(pageNum + 1) * aPerPage >= animals.length}
            >
              {'>'}
            </button>
          </div>
        </div>
    </>
  )
}
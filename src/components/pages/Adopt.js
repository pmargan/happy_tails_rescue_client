import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Adopt() {

  const aPerPage = 6

  const [animals, setAnimals] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}])
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3001/all-animals')
        .then(result => {
          setAnimals(result.data.value)
        })
    }
    getData()
  }, [])

  return (
    <>
      <div className='animals'>
          {animals.slice(pageNum*aPerPage, pageNum*aPerPage+aPerPage).map(animal => (
            <div key={animal.id} >
              <img src={animal.image} alt='animal' />
              <h3>{animal.name || 'Name'}</h3>
              <p>{animal.breed || 'Breed'}</p>
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

export default Adopt

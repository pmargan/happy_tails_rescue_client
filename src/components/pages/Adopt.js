import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Adopt() {

  const aPerPage = 6

  const [animals, setAnimals] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}])
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/animals')
      .then(result => {
        console.log(result)
        setAnimals(result.data.value)
      })
  }, [])

  return animals ? (
    <>
    <div className="Animals">
      <h1>All Available Animals</h1>
      {animals.slice(pageNum*aPerPage, pageNum*aPerPage+aPerPage).map(animal => (
        <>
          <p>{animal.value}</p>
          <br/>
        </>
      ))}
    </div>
        <div className='changePage'>
          <div>
            <>
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
            </>
          </div>
        </div>
        </>
  ) : (
    <p>There is no available Animals</p>
  )
}

export default Adopt

import React, {useState, useEffect} from 'react'

import '../../stylesheets/pages/Home.scss'

function Home() {

  const aPerPage = 6

  const [animals, setAnimals] = useState([{}, {}, {}, {}, {}, {}, {}])
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    // pull animals from backend
  }, [])

  return (
    <>
      <div className='animals'>
        {animals.slice(pageNum*aPerPage, pageNum*aPerPage+aPerPage).map(animal => (
          <div>
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

export default Home

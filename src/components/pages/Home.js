import React, {useState, useEffect} from 'react'

import '../../stylesheets/pages/Home.scss'

import Form from '../helpers/Form'

function Home() {

  const aPerPage = 6

  const [animals, setAnimals] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}])
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    // pull animals from backend
  }, [])

  return (
    <>
      <Form className='myForm' onSubmit={(data) => {console.log(data)}}>
        <div>
          <div>
            <label>Hello:</label>
            <input type='text' name='Hello' />
          </div>
          <div>
            <label>World:</label>
            <input type='text' name='World' />
          </div>
          <button>Next</button>
        </div>
        <div>
          <div>
            <label>Does:</label>
            <input type='text' name='Does' />
          </div>
          <div>
            <label>This:</label>
            <input type='text' name='This' />
          </div>
          <div>
            <label>Work:</label>
            <input type='text' name='Work' />
          </div>
          <button>Submit</button>
        </div>
      </Form>
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

export default Home

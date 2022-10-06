import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorParameter from './Components/ErrorParameter'
import FilterList from './Components/FilterList'
import Location from './Components/Location'
import GetRandomLocation from './Utils/GetRandomLocation'
import { TbMapSearch } from "react-icons/tb"

function App() {

  const [ubication, setUbication] = useState()
  const [searchInput, setSearchInput] = useState()
  const [sugestedList, setSugestedList] = useState()
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    let id = GetRandomLocation()
    if (searchInput) {
      id = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setUbication(res.data)
        setSugestedList()
      })
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = e => {
    if (e.target.value === '') {
      setSugestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
      axios.get(URL)
        .then(res => setSugestedList(res.data.results))
        .catch(err => console.log(err))
    }
  }
  console.log(sugestedList);

  return (
    <div className="App">
      <form className='form-search' onSubmit={handleSubmit}>
        <div className='search-father'>
          <input
            className='search'
            id='idLocation'
            placeholder='Ingresa una localizacion'
            type="text"
            onChange={handleChange}
          />
          <button className='btn-search'>
            <TbMapSearch />
            
          </button>
        </div>
        <FilterList
          sugestedList={sugestedList}
          setSearchInput={setSearchInput}
        />
      </form>
      <>
        {
          hasError ?
            <ErrorParameter />
            :
            <Location ubication={ubication} />
        }
      </>
    </div>
  )
}

export default App

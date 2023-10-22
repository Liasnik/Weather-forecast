import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api'
import s from './search.module.css'

const initialCities = [
  {
    latitude: '50.45',
    longitude: '30.523611111',
    name: 'Kyiv',
    countryCode: 'UA',
    id: 3520102,
  },

  {
    latitude: '40.7',
    longitude: '-74',
    name: 'New York City',
    countryCode: 'US',
    id: 123214,
  },
  {
    latitude: '36.883611111',
    longitude: '-94.876111111',
    name: 'Miami',
    countryCode: 'US',
    id: 117839,
  },
  {
    latitude: '32.08',
    longitude: '34.78',
    name: 'Tel Aviv',
    countryCode: 'IL',
    id: 54067,
  },
  {
    latitude: '27.978611111',
    longitude: '34.393611111',
    name: 'Sharm el-Sheikh',
    countryCode: 'EG',
    id: 25970,
  },
]

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)
  // console.log(search)

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=4000&namePrefix=${inputValue}`,
        geoApiOptions
      )
      if (!response.ok) {
        throw new Error('No ok!')
      }
      const result = await response.json()
      // console.log(result)

      const resultConcat = initialCities.concat(result.data)

      return {
        options: resultConcat.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`,
          }
        }),
      }
    } catch (error) {
      console.error('%cОшибка ', 'color: yellow', error)
      return { options: [] }
    }
  }

  //   const loadOptions = async (inputValue) => {
  //     try {
  //       const response = await fetch(
  //         `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
  //         geoApiOptions
  //       )
  //       const response_1 = await response.json()
  //       console.log(response_1)
  //       return {
  //         options: response_1.data.map((city) => {
  //           return {
  //             value: `${city.latitude} ${city.longitude}`,
  //             label: `${city.name}, ${city.countryCode}`,
  //           }
  //         }),
  //       }
  //     } catch (err) {
  //       return console.log('%cОшибка ', 'color: yellow', err)
  //     }
  //   }

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      className={s.search}
      placeholder="Search for city"
      debounceTimeout={1100}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search

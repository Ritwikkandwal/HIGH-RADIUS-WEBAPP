import React from 'react'
import { TextField } from '@mui/material'

function Search() {

  const searchStyles = {

    marginLeft:'70px',
    bgcolor: '#F4F8FA',
    marginTop: '10px',
  }


  function SearchValue(val) {

    console.log("Search Clicked " + val.target.value)
  }

  return (
    <React.Fragment>
      <input className='search' onChange={SearchValue} type="text" placeholder="Search customer id" />

    </React.Fragment>
  )
}

export default Search
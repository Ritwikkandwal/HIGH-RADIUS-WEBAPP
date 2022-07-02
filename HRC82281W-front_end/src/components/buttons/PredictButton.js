import React from 'react'
import { Button } from '@mui/material'

function PredictButton() {

  const predictButtonStyles = {

    marginLeft: '40px',
    width: '150px',
    height: '30px',
    color: 'white',
    backgroundColor: '#273D49CC',
    borderColor:'#14AFF1',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: '#14AFF1',
      color: 'white'
    }
  }

  function predict() {
    console.log("Predict Clicked");
  }

  return (
    <React.Fragment>
      <Button onClick={predict} variant='outlined' sx={predictButtonStyles}>PREDICT</Button>
    </React.Fragment>
  )
}

export default PredictButton
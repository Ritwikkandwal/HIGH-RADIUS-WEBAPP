import React from 'react'
import { Button } from '@mui/material'

function AnalyticsViewButton() {

  const analyticsButtonStyles = {

    width: '200px',
    height: '30px',
    color: 'white',
    backgroundColor: '#273D49CC',
    borderColor:'#14AFF1',
    marginTop: '10px',
    '&:hover':{
      backgroundColor:'#14AFF1',
      color: 'white'
    }
  }

    function Analytics(){
        console.log("Analytics Clicked")
    }

  return (
    <React.Fragment>
        <Button onClick={Analytics} variant='outlined' sx={analyticsButtonStyles}>ANALYTICS VIEW</Button>
    </React.Fragment>
  )
}

export default AnalyticsViewButton
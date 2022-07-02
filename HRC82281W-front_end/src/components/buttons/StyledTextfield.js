import { TextField } from '@mui/material'
import React from 'react'

function StyledTextfield(props) {
  return (
    <TextField sx={{ minWidth: 300,bgcolor:'#FFFFFF'}} label={props.label} variant="filled"></TextField>
  )
}

export default StyledTextfield
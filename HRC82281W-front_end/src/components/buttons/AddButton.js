import React from 'react'
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField,Stack } from '@mui/material'
import {DatePicker} from '@mui/lab'
import {useState} from 'react'
import StyledTextfield from './StyledTextfield'

function AddButton() {

  const [addOpen, setaddOpen] = useState(false)

  const addButtonStyles = {

    marginLeft: '70px',
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

  function Add() {
    console.log("Add Clicked")
  }

  return (
    <React.Fragment>
      <Button onClick={() => setaddOpen(true)} variant='outlined' sx={addButtonStyles}>ADD</Button>
      <Dialog
       aria-labelledby='addDialogTitle'
       open = {addOpen}
       onClose = {() => setaddOpen(false)}
       maxWidth= '1000px'>
        <DialogTitle id = 'addDialogTitle' sx={{color:'#FFFFFF',bgcolor:'#2A3E4C'}}>
          Add
        </DialogTitle>
        <DialogContent sx={{bgcolor:'#2A3E4C'}}>
          <Stack spacing={2} direction='row' sx={{ marginTop: '10px'}}>
        <StyledTextfield label="Business Code"></StyledTextfield>
        <StyledTextfield label="Customer Number"></StyledTextfield>
        <StyledTextfield label="Clear Date"></StyledTextfield>
        <StyledTextfield label="Business Year"></StyledTextfield>
        </Stack>
        <Stack spacing={2} direction='row'sx={{ marginTop: '20px'}} >
        <StyledTextfield label="Document Id"></StyledTextfield>
        <StyledTextfield label="Posting Date"></StyledTextfield>
        <StyledTextfield label="Document Create Date"></StyledTextfield>
        <StyledTextfield label="Due Date"></StyledTextfield>
        </Stack>
        <Stack spacing={2} direction='row'sx={{ marginTop: '20px'}} >
        <StyledTextfield label="Invoice Currency"></StyledTextfield>
        <StyledTextfield label="Document Type"></StyledTextfield>
        <StyledTextfield label="Posting Id"></StyledTextfield>
        <StyledTextfield label="Total Open Amount"></StyledTextfield>
        </Stack>
        <Stack spacing={2} direction='row'sx={{ marginTop: '20px'}} >
        <StyledTextfield label="Baseline Create Date"></StyledTextfield>
        <StyledTextfield label="Customer Payment Terms"></StyledTextfield>
        <StyledTextfield label="Invoice Id"></StyledTextfield>
        </Stack>
        </DialogContent>
        <DialogActions sx={{bgcolor:'#2A3E4C'}}>
          <Button onClick={Add} variant='contained'>Add</Button>
          <Button onClick={() => setaddOpen(false)}variant='contained'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default AddButton
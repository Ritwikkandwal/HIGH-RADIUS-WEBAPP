import React from 'react'
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField,Stack } from '@mui/material'
import {useState} from 'react'
import StyledTextfield from './StyledTextfield'

function AdvanceSearchButton() {

  const [advanceSearchDialog, setadvanceSearchDialog] = useState(false)

  const advanceSearchButtonStyles = {

    width: '200px',
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


  function AdvanceSearch() {
    console.log("AdvanceSearch Clicked")
  }

  return (
    <React.Fragment>
      <Button onClick ={() => setadvanceSearchDialog(true)} variant='outlined' sx={advanceSearchButtonStyles}>ADVANCE SEARCH</Button>
      <Dialog
       aria-labelledby='advanceSearchDialogTitle'
       open = {advanceSearchDialog}
       onClose = {() => setadvanceSearchDialog(false)}
       maxWidth= '1000px'>
        <DialogTitle id = 'advanceSearchDialogTitle' sx={{color:'#FFFFFF',bgcolor:'#2A3E4C'}}>
          Advance Search
        </DialogTitle>
        <DialogContent sx={{bgcolor:'#2A3E4C'}}>
          <Stack spacing={2} direction='row' sx={{ marginTop: '10px'}}>
        <StyledTextfield label="Document Id"></StyledTextfield>
        <StyledTextfield label="Invoice Id"></StyledTextfield>
        </Stack>
        <Stack spacing={2} direction='row'sx={{ marginTop: '20px'}} >
        <StyledTextfield label="Customer Number"></StyledTextfield>
        <StyledTextfield label="Business Year"></StyledTextfield>
        </Stack>
        </DialogContent>
        <DialogActions sx={{bgcolor:'#2A3E4C'}}>
          <Button onClick={AdvanceSearch} variant='contained'>Search</Button>
          <Button onClick={() => setadvanceSearchDialog(false)} variant='contained'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default AdvanceSearchButton
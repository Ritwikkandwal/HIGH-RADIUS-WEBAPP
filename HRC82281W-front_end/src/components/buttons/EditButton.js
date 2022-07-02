import React from 'react'
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField,Stack } from '@mui/material'
import {useState} from 'react'
import StyledTextfield from './StyledTextfield'

function EditButton() {

  const [editDialog, seteditDialog] = useState(false)


  const editButtonStyles = {

    width: '150px',
    height: '30px',
    color: 'white',
    backgroundColor: '#273D49CC',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: '#14AFF1',
      color: 'white'
    }
  }

  function Edit() {
    console.log("Edit Clicked")
  }

  return (
    <React.Fragment>
      <Button onClick={() => seteditDialog(true)} variant='contained' sx={editButtonStyles}>EDIT</Button>
      <Dialog
       aria-labelledby='editDialogTitle'
       open = {editDialog}
       onClose = {() => seteditDialog(false)}
       maxWidth= '1000px'>
        <DialogTitle id = 'editDialogTitle' sx={{color:'#FFFFFF',bgcolor:'#2A3E4C'}}>
          Edit
        </DialogTitle>
        <DialogContent sx={{bgcolor:'#2A3E4C'}}>
          <Stack spacing={2} direction='row' sx={{ marginTop: '10px'}}>
        <StyledTextfield label="Invoice Currency" variant="filled"></StyledTextfield>
        <StyledTextfield label="Customer Payment Terms" variant="filled"></StyledTextfield>
        </Stack>
        </DialogContent>
        <DialogActions sx={{bgcolor:'#2A3E4C'}}>
          <Button onClick={Edit} variant='contained'>Edit</Button>
          <Button onClick={() => seteditDialog(false)}variant='contained'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default EditButton
import React from 'react'
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText } from '@mui/material'
import {useState} from 'react'

function DeleteButton() {

  const [deleteDialog, setdeleteDialog] = useState(false)

  const deleteButtonStyles = {
    width: '150px',
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

    function Delete(){
        console.log("Delete Clicked")
    }

  return (
    <React.Fragment>
        <Button onClick={() => setdeleteDialog(true)} variant='outlined' sx={deleteButtonStyles}>DELETE</Button>
        <Dialog
       aria-labelledby='deleteDialogTitle'
       aria-describedby='deleteDialogDescription'
       open = {deleteDialog}
       onClose = {() => setdeleteDialog(false)}
       maxWidth= '1000px'>
        <DialogTitle id = 'deleteDialogTitle' sx={{color:'#FFFFFF',bgcolor:'#2A3E4C'}}>
          Delete Records ?
        </DialogTitle>
        <DialogContent sx={{bgcolor:'#2A3E4C'}}>
          <DialogContentText id = 'deleteDialogDescription' sx={{color:'#FFFFFF'}}>
            Are you sure you want to delete these Records[s]
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{bgcolor:'#2A3E4C'}}>
          <Button onClick={Delete} variant='contained'>Delete</Button>
          <Button onClick={() => setdeleteDialog(false)} variant='contained'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default DeleteButton
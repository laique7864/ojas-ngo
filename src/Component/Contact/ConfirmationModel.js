import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


export default function ConfirmationModel({ open, handleClose }) {
  return (
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
    
    >
    <div className="bg-white">
        
      <DialogTitle id="alert-dialog-title" style={{background:'#3aa11d', color:'#fff'}}>
        {"Thank you for your submission! 🎉"}
      </DialogTitle>
      <DialogContent className="bg-white">
          <DialogContentText id="alert-dialog-description"  >
          <p className="text-black font-lg mt-5">Your information has been received and is important to us. We appreciate your interest and the time you've taken to connect with us. 
          </p>
         <h6 className="text-black text-lg "> Thank you for being a part of our community!</h6>
          </DialogContentText>
        </DialogContent>
      <DialogActions className="bg-white">
          <Button onClick={handleClose} >
          Ok
          </Button>
        </DialogActions>
    </div>
    </Dialog>
  );
}

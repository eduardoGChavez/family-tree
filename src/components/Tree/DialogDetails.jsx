import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const DialogDetails = () => {
  return (
    <div>
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        // TransitionProps={{ onEntering: handleEntering }}
        open={true}
        // open={open}
        // {...other}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          // {...other}
        >
          Hola mundo
          {/* {onClose ? ( */}
            <IconButton
              aria-label="close"
              // onClick={onClose}
              // sx={{
              //   position: 'absolute',
              //   right: 8,
              //   top: 8,
              //   color: (theme) => theme.palette.grey[500],
              // }}
            >
              <CloseIcon />
            </IconButton>
          {/* ) : null} */}
        </DialogTitle>
        <DialogContent dividers>
          Contenido UwU
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogDetails;
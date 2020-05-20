import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const AlertDialogClear = (props) => {
  return (
    <div>
      <Dialog open={props.showDialog} onClose={() => props.closeDialog(false)}>
        <DialogTitle id="alert-dialog-title">{"Confirm Clear"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Really clear the whole list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.closeDialog(false)}>Cancel</Button>
          <Button
            onClick={() => props.closeDialog(true)}
            color="primary"
            autoFocus
          >
            Clear It
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogClear;

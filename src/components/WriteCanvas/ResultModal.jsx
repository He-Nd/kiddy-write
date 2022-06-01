import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, Modal, Button } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function ResultModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setCounter(65);
    props.setTotalCorrectTries(0);
    props.setTotalIncorrectTries(0);
    props.setWrongRoundTries(0);
    props.canvasRef.current.clear();
    props.setIsFinished(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.isFinished ? true : false}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paper}>
          <h2>Great Job!</h2>
          <p>Your total successful tries: {props.totalCorrectTries}</p>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Try again!
          </Button>
        </div>
      </Modal>
    </div>
  );
}

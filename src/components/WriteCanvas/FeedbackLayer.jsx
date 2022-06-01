import react from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Zoom } from "@material-ui/core/";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  layer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
    zIndex: 3,
  },
}));

export default function FeedbackText(props) {
  const classes = useStyles();
  return (
    <div className={classes.layer}>
      <Zoom
        in={props.open}
        timeout={{
          appear: 4000,
          enter: 3000,
          exit: 2000,
        }}
      >
        <Typography variant="h2">
          {props.isCorrect ? "Good job!" : "You're almost there!"}
        </Typography>
      </Zoom>
    </div>
  );
}

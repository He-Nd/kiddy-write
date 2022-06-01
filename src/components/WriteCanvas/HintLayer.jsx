import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  layer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    pointerEvents: "none",
  },
  hint: {
    fontFamily: "arial",
    userSelect: "none",
    pointerEvents: "none",
    opacity: 0.3,
    fontSize: 200,
  },
}));

export default function HintLayer(props) {
  const classes = useStyles();
  return (
    <div className={classes.layer}>
      {props.wrongRoundTries >= 3 ? (
        <Typography variant="h1" className={classes.hint}>
          {props.stringToWrite}
        </Typography>
      ) : (
        ""
      )}
    </div>
  );
}

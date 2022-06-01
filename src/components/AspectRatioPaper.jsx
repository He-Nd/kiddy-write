import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ratioBox: {
    position: "relative",
    width: "100%",
    margin: theme.spacing(4, 0),
    border: "6px solid " + theme.palette.primary.main,
    "&::before": {
      display: "block",
      content: '""',
      width: "100%",
      paddingTop: "56%",
    },
    "& > *": {
      position: "absolute !important",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
}));

export default function AspectRatioPaper(props) {
  const classes = useStyles();
  return (
    <Paper elevation={4} className={classes.ratioBox}>
      {props.children}
    </Paper>
  );
}

import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  progressCircle: {
    color: theme.palette.secondary.main,
  },
  backdrop: {
    zIndex: 1,
  },
}));

export default function LoadingLayer(props) {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={props.open}>
      <CircularProgress className={classes.progressCircle} />
    </Backdrop>
  );
}

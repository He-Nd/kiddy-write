import { Paper,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import pencil from '../assets/pencil.svg';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1,2),
    [theme.breakpoints.up("sm")]: {
      width: "400px"
    },
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
  pencilImg: {
    height: "150px",
    width: "150px",
  }
}));

export default function Form(props) {
  const classes = useStyles();
  const { children, title, ...otherProps } = props;
  return (<Paper
    component="form"
    className={classes.form}
    {...otherProps}
  >
    <Typography variant="h3">{title}</Typography>

    <img className={classes.pencilImg} src={pencil} alt="logo" />
    {children}
  </Paper>)
}
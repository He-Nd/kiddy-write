import Page from './Page';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import pencil from "../assets/pencil.svg"
import Title from '../components/Title';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding:theme.spacing(1),
    "& > *" :{
      marginBottom:theme.spacing(2)
    }
  }
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <Page>
      <div className={classes.root}>
      <Title prefix="Welcome to" />


        <img src={pencil} alt="logo" width="250px" height="250px"/>


        <Typography variant="h6">
          Wanna improve your writing skills?!
          Play here and try to get all the letters right in time!
          Just login and start! Have fun! 
        </Typography>

          

      </div>
    </Page>
  );
}

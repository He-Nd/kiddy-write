import { makeStyles } from "@material-ui/core/styles";
import pattern from "../assets/pattern.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop:theme.spacing(2),
    backgroundImage: `url(${pattern})`,
    minHeight:"100vh",
  },
  content: {
    paddingTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.up("xlg")]: {
      width: "30%",
    },
  },
}));

export default function Page(props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

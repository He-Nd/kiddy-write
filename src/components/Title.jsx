import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  }


}));

export default function Title(props){
    const classes = useStyles();
    const {prefix,...otherProps} = props;
    return (
    <Typography variant="h4" align="center" {...otherProps}>
    {props.prefix} <span className={classes.appTitle}>Kiddy Write</span>!
  </Typography>);
}
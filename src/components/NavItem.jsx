import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
active:{
    color: theme.palette.secondary.main
}
}));
export default function NavItem(props) {
    const classes = useStyles();
    const {path,icon,text,...listItemProps} = props;
    return (<ListItem button  component={NavLink} activeClassName={classes.active} exact to={props.path} {...listItemProps}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
    </ListItem>);
}
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar as MaterialAppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from './NavDrawer';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBar() {
  const classes = useStyles();
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <MaterialAppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> setIsDrawerOpen(!isDrawerOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Kiddy Write
          </Typography>
        </Toolbar>
      </MaterialAppBar>
      <NavDrawer isOpen={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}/>
    </div>
  );
}
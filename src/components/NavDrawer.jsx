import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import {
  HomeOutlined,
  InfoOutlined,
  DonutSmallOutlined,
  Input,
  GroupAdd,
  ArrowBack,
  Games,
} from "@material-ui/icons";
import NavItem from "./NavItem";
import {
  ABOUT_PATH,
  HOME_PATH,
  GAME_PATH,
  STATS_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from "../routes";
import { Fragment } from "react";
import { UserContext } from "../contexts";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const navItems = [
  { icon: <HomeOutlined />, text: "Home", path: HOME_PATH },
  { icon: <Games />, text: "Game", path: GAME_PATH },
  {
    icon: <DonutSmallOutlined />,
    text: "Stats Graph",
    path: STATS_PATH,
  },
  { icon: <InfoOutlined />, text: "About", path: ABOUT_PATH },
];

export default function NavDrawer(props) {
  const classes = useStyles();
  const userContext = useContext(UserContext);
  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.onClose}>
      <List className={classes.list}>
        {navItems.map((item) => (
          <NavItem key={item.path} {...item} onClick={props.onClose} />
        ))}

        {userContext.loggedIn ? (
          <NavItem
            icon={<ArrowBack />}
            text="Logout"
            path={LOGIN_PATH}
            onClick={userContext.toggleLogin}
          />
        ) : (
          <Fragment>
            <NavItem
              icon={<Input />}
              text="Login"
              path={LOGIN_PATH}
            />
            <NavItem icon={<GroupAdd />} text="Register" path={REGISTER_PATH} />
          </Fragment>
        )}
      </List>
    </Drawer>
  );
}

import React, { Fragment, useState, useEffect } from "react";
import { UserContext } from "./contexts";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import {
  HOME_PATH,
  GAME_PATH,
  ABOUT_PATH,
  STATS_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from "./routes";
import PracticePage from "./pages/PracticePage";
import StatsPage from "./pages/StatsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("placeHolder");

  const userContext = {
    loggedIn,
    email,
    toggleLogin: (email) => {
      setLoggedIn(!loggedIn);
      setEmail(email);
    },
  };

  return (
    <UserContext.Provider value={userContext}>
      <CssBaseline />
      <Router>
        <AppBar />
        <Switch>
          <Route exact path={STATS_PATH} component={StatsPage} />
          <Route exact path={ABOUT_PATH} component={AboutPage} />
          <Route exact path={HOME_PATH} component={HomePage} />
          <Route exact path={GAME_PATH} component={PracticePage} />
          <Route exact path={LOGIN_PATH} component={LoginPage} />
          <Route exact path={REGISTER_PATH} component={RegisterPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

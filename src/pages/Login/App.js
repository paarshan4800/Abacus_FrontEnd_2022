import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignInForm from "./pages/SignInForm";
import { Typography } from "@material-ui/core";
import ForgotPassword from "./pages/ForgotPassword";
import logstyle from "./logstyle.module.css";
import NewPassword from "./pages/NewPassword";
class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className={logstyle.App}>
       {/*<div className={logstyle.appAside} ><center><div className={logstyle.typed-out}>Welcome!</div></center></div>*/}
       <div className={logstyle.appAside} >
         <center>
       <Typography>
       <div className={logstyle.typingDemo} width="40%">
         <div className={logstyle.glow}>
            Welcome!
          </div>
          </div>
        </Typography>
        </center>
        </div>
          <div className={logstyle.appForm}>
            <div className={logstyle.pageSwitcher}>
              <NavLink to="/sign-in" activeclassName={logstyle.pageSwitcherItemActive} className={logstyle.pageSwitcherItem} >
                Sign In
              </NavLink>
              <NavLink exact to="/" activeclassName={logstyle.pageSwitcherItemActive} className={logstyle.pageSwitcherItem}>
                Sign Up
              </NavLink>
            </div>
            <Route path="/NewPassword" component = {NewPassword}/>
            <Route exact path="/" component={SignUp} />   
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

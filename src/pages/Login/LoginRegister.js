import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignInForm from "./pages/SignInForm";
import { Typography } from "@material-ui/core";
import ForgotPassword from "./pages/ForgotPassword";
import logstyle from "./logstyle.module.css";
import NewPassword from "./pages/NewPassword";
import GlassButton from "../../components/GlassButton/GlassButton";
import VerifyEmail from "./pages/VerifyEmail";
function LoginRegister() {
  return (
    <Router>
      <div className={logstyle.App}>
        {/*<div className={logstyle.appAside} ><center><div className={logstyle.typed-out}>Welcome!</div></center></div>*/}
        <div className={logstyle.appAside}>
          <center>
            <Typography>
              <div className={logstyle.typingDemo} width="40%">
                <div className={logstyle.glow}>Welcome!</div>
              </div>
            </Typography>
            <div className={logstyle.styleButton}>
                <NavLink
                 to="/sign-in"
                 activeclassName={logstyle.pageSwitcherItemActive}
                >
                <GlassButton title="Sign In" />
                </NavLink>
                <NavLink
                exact
                to="/"
                activeclassName={logstyle.pageSwitcherItemActive}
                >
                <GlassButton title="Sign Up" />
                </NavLink>

                </div>
          </center>
        </div>

        <div className={logstyle.appForm}>
          <Route path="/NewPassword" component={NewPassword} />
          <Route exact path="/" component={SignUp} />
          <Route path="/sign-in" component={SignInForm} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/VerifyEmail" component={VerifyEmail} />
        </div>
      </div>
    </Router>
  );
}

export default LoginRegister;

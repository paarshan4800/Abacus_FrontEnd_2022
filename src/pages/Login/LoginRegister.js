import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
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
    <BrowserRouter>
      <div className={logstyle.App}>
        
        <div className={logstyle.appAside}>
          <center>
            <Typography>
              <div className={logstyle.typingDemo} width="40%">
                <div className={logstyle.glow}>Welcome!</div>
              </div>
            </Typography>
            <div className={logstyle.styleButton}>
                <NavLink
                exact
                 to="/"
                 activeclassName={logstyle.pageSwitcherItemActive}
                >
                <GlassButton title="Sign In" />
                </NavLink>
                <NavLink
                to="/sign-up"
                activeclassName={logstyle.pageSwitcherItemActive}
                >
                <GlassButton title="Sign Up" />
                </NavLink>

                </div>
          </center>
        </div>

        <div className={logstyle.appForm}>
          <Switch>
          <Route path="/NewPassword" component={NewPassword} />
          <Route path="/sign-up" component={SignUp} />
          <Route exact path="/" component={SignInForm} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/VerifyEmail" component={VerifyEmail} />
          </Switch>
        </div>
        </div>
    </BrowserRouter>
  );
}

export default LoginRegister;

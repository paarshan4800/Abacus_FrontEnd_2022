import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignInForm from "./pages/SignInForm";
import { Typography } from "@material-ui/core";
import ForgotPassword from "./pages/ForgotPassword";
import logstyle from "./logstyle.module.css";
import NewPassword from "./pages/NewPassword";
import GlassButton from "../../components/GlassButton/GlassButton";
function LoginRegister()
{
    return (
      <Router>
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
            <div className={logstyle.styleButton}>
              <NavLink to="/sign-in" className={logstyle.SignIN} style={{ color: 'white' }} activeclassName={logstyle.pageSwitcherItemActive} >
                <GlassButton title="Sign In" />
              </NavLink>
              <NavLink exact to="/" className={logstyle.SignUP} style={{ color: 'white' }} activeclassName={logstyle.pageSwitcherItemActive} >
                <GlassButton title="Sign Up" />
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

export default LoginRegister;

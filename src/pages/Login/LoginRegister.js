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
import Main from "./dummy/Main";
class LoginRegister extends React.Component {
  constructor(){
      super();
  }
 render(){
  return(
    <div className={logstyle.LoginRegisterBg}>
      <Main />
    </div>
  );
}
}
export default LoginRegister;
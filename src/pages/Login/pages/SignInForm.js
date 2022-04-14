import React, { useState, Component, useEffect, useContext } from "react";
// import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton.js";
import {
  googleSignIn,
  normalSignIn,
  afterGoogleSignIn,
} from "../../../api/auth";
import GoogleButton from "react-google-button";
import { SetAuthApi } from "../../../App";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  // console.log("token from cookie is ", localStorage.getItem("apiToken"));
  const setAuth = useContext(SetAuthApi);
  //handle normal signin
  const onSubmitSignIn = async () => {
    //console.log("in on submit signin");
    var values = {
      email,
      password,
    };
    //console.log(values);

    const details = await normalSignIn(values);
    if (details.token != undefined) {
      console.log("hello");
      setAuth(true);
    }
  };

  useEffect(afterGoogleSignIn);
  return (
    <div className={logstyle.appForm}>
      <div className={logstyle.formCenter}>
        <div className={logstyle.styleButton}>
          <GoogleButton
            className="google-button"
            onClick={() => {
              //console.log("Google button clicked");
              googleSignIn();
            }}
            type="dark"
          />
        </div>
        <form className={logstyle.formFields} onSubmit={() => onSubmitSignIn()}>
          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className={logstyle.formFieldInputSI}
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>

          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={logstyle.formFieldInputSI}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>

          <div className={logstyle.formField}>
            {/*<button className={logstyle.formFieldButton}>Sign In</button>{" "}*/}
            <div
              className={logstyle.styleButton}
              onClick={() => onSubmitSignIn()}
            >
              <GlassButton title="Login" />
              {/*

            <NavLink to="/ForgotPassword" className={logstyle.formFieldButtonDirected} >
              Forgot Password?
            </NavLink>*/}
            </div>
          </div>
          <div className={logstyle.formField}>
            <div style={{ display: "inline" }}>
              <NavLink to="/ForgotPassword" className={logstyle.formFieldLink}>
                Forgot Password?
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignInForm;

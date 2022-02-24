import React, { useState, Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton.js";
import GoogleButton from "react-google-button";
import axios from "axios";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*
   const clickGoogleIcon = () => {
    window.location = `${baseURL}${url_gAuth}`
   }*/

  const onSubmitSignIn = () => {
    console.log("in on submit signinnnnn");
    var values = {
      email,
      password,
    };
    console.log(values);
    axios
      .post("https://abacus-22-backend.herokuapp.com/user/login", values)
      .then((response) => {
        if (response.status === 200) {
          console.log("Token ==", response.data.token);
          alert(" token has been generated, check console");
        }
      })
      .catch((err) => {
        console.log("the error code is", err.response.status);
        alert(err.response.data.message);
        if (err.response.status === 404) {
          setTimeout(() => {
            window.location = "http://localhost:3000/Login#/";
          }, 1000);
        }
      });

    console.log(values);
  };
  return (
    <div className={logstyle.formCenter}>
      <form className={logstyle.formFields} onSubmit={() => onSubmitSignIn()}>
        <div className={logstyle.formField}>
          <label className={logstyle.formFieldLabel} htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className={logstyle.formFieldInput}
            placeholder="Enter your email"
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
            className={logstyle.formFieldInput}
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </div>
        <div className={logstyle.styleButton}>
          <GoogleButton
            className="google-button"
            onClick={() => {
              console.log("Google button clicked");
            }}
            type="dark"
          />
        </div>

        <div className={logstyle.formField}>
          {/*<button className={logstyle.formFieldButton}>Sign In</button>{" "}*/}
          <div
            className={logstyle.styleButton}
            onClick={() => onSubmitSignIn()}
          >
            <GlassButton title="Sign In" />
            <NavLink to="/ForgotPassword">
              <GlassButton title="Forgot Password?" />
            </NavLink>
            {/*
            <NavLink to="/ForgotPassword" className={logstyle.formFieldButtonDirected} >
              Forgot Password?
            </NavLink>*/}
          </div>
        </div>
        <div className={logstyle.formField}>
          <NavLink to="/" className={logstyle.formFieldLink}>
            Create an account
          </NavLink>
        </div>
      </form>
    </div>
  );
}
export default SignInForm;
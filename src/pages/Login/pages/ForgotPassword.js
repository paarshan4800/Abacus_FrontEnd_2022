import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";
function ForgotPassword() {
    return (
      
      <div className={logstyle.formCenter}>
        <h1>Forgot your Password?</h1>
        <h3>No worries! Enter your e-mail and we will send you a reset.</h3>
        <form className={logstyle.formFields}>
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
            />
          </div>
          {/*<button className={logstyle.formFieldButton}>Submit</button>{" "}*/}
          <div className={logstyle.styleButton}>
              <GlassButton title="Submit"/>
          </div>
        </form>
      </div>
    );
}

export default ForgotPassword;
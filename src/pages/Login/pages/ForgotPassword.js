import React, { useState, Component } from "react";
import { Typography } from "@material-ui/core";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";
import { forgetPassword } from "../../../api/auth";
import fpic from "./assets/images/forgot.png";
function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onforgetPassword = async() => {
    var values = {
      email
    };
    console.log(values)

    const msg =  await forgetPassword(values);
    var res_msg = document.getElementById("msg");
    res_msg.innerHTML = msg;
  }
    return (
      <div className={logstyle.App}>
      <div className={logstyle.appAside}>
          {/* <center>
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
          </center> */}
      </div>

      <div className={logstyle.appForm}>
      <div className={logstyle.SIOut}>
      <div className={logstyle.SICenter}>
        <h1 className={logstyle.h11}>Forgot your Password?</h1>
        <h3 className={logstyle.h33}>No worries! Enter your e-mail and we will send you a reset.</h3>
        <div id="msg"></div> {/*div element prints the server's responses*/}
        <form className={logstyle.formFields} onSubmit={() => onforgetPassword()}>
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
          {/*<button className={logstyle.formFieldButton}>Submit</button>{" "}*/}
          <div className={logstyle.styleButton} onClick={() => onforgetPassword()}>
              <GlassButton title="Submit"/>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
}

export default ForgotPassword;
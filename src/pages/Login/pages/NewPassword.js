import React, { Component } from "react";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";

function NewPassword() {
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
        <h2>Enter New Password</h2>
        <br></br>
        <form className={logstyle.formFields}>
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
            />
          </div>
           {/*confirm password*/}
           <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="conpass">
              Confirm Password
            </label>
            <input
              type="password"
              id="conpass"
              className={logstyle.formFieldInput}
              placeholder="Confirm your password"
              name="conpass"
            />
          </div>
          <div className={logstyle.styleButton}>
              <GlassButton title="Submit"/>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
}
export default NewPassword;
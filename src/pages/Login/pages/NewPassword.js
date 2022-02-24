import React, { Component } from "react";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";

function NewPassword() {
    return (
      <div className={logstyle.NPOut}>
      <div className={logstyle.NPCenter}>
        <h2>Enter New Password</h2>
        <form className={logstyle.formFields}>
        <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={logstyle.formFieldInputNp}
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
              className={logstyle.formFieldInputNp}
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
    );
}
export default NewPassword;
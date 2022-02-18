import React, { Component } from "react";
import logstyle from "./../logstyle.module.css";

function NewPassword() {
    return (
      <div className={logstyle.formCenter}>
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
           {/confirm password/}
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
        </form>
      </div>
    );
}
export default NewPassword;
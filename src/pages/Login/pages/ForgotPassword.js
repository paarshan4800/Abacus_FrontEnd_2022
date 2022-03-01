import React, { useState, Component, useEffect } from "react";
import { Typography } from "@material-ui/core";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";
import axios from "axios";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const onforgetPassword = () => {
      var values = {
        email
      };

      axios
      .post("http://localhost:8000/forgetPassword", values)
      .then((response) => {
        if (response.status === 200) {
          var res_msg = document.getElementById("msg");
          res_msg.innerHTML = response.data.message;

          console.log(response.data.message)
          console.log("Forget Password successful");
        }
      })
      .catch((err) => {
        console.log("the error code is", err.response.status);
        
        var err_msg = document.getElementById("msg");
        err_msg.innerHTML = err.response.data.message;
      });

    console.log(values);
    }
    return (
      
      <div className={logstyle.formCenter}>
        <form className={logstyle.formFields} onSubmit={() => onforgetPassword()}>
      <div className={logstyle.FPOut}>
      <div className={logstyle.FPCenter}>
        <h1 className={logstyle.h11}>Forgot your Password?</h1>
        <h3 className={logstyle.h33}>No worries! Enter your e-mail and we will send you a reset. This may take a few seconds</h3>
        <div id="msg"></div> {/*div element prints the server's responses*/}
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
      </form>
      </div>
    );
}

export default ForgotPassword;

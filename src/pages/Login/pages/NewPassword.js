import React, { Component, useEffect, useState } from "react";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";
import axios from "axios";

function NewPassword() {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const onPassword = () => {
    var values = {
      pass,
      confirmPass,
    };

    const token = window.location.pathname.split("/")[2];

    axios
      .put("http://localhost:8000/resetPassword/" + token, values)
      .then((response) => {
        if (response.status === 200) {
          var msg = document.getElementById("alert_msg");
          msg.innerHTML = response.data.message;
          console.log(response.data.message);
          console.log("Reset Password Successful");
        }
      })
      .catch((err) => {
        var msg = document.getElementById("alert_msg");
        msg.innerHTML = err.response.data.message;
        console.log(err.response.data.message);
        console.log("the error code is", err.response.status);
      });

    console.log(values);
  };
  return (
    <div className={logstyle.App}>
      <div className={logstyle.appForm}>
        {/* <div className={logstyle.SIOut}> */}
        {/* <div className={logstyle.SICenter}> */}
        <div id="alert_msg" className={logstyle.formFieldLabel}></div>{" "}
        {/*div element needs to be properly positioned*/}
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
              value={pass}
              onChange={(e) => {
                setPass(e.currentTarget.value);
              }}
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
              value={confirmPass}
              onChange={(e) => {
                setConfirmPass(e.currentTarget.value);
              }}
            />
          </div>
          <div className={logstyle.styleButton} onClick={() => onPassword()}>
            <GlassButton title="Submit" />
          </div>
        </form>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
export default NewPassword;

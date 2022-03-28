import React, { useState, Component } from "react";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";
import { resetPassword } from "../../../api/auth";

function NewPassword() {
  const [pass, setPass] = useState("");
  const [confirmPass, setConPass] = useState("");

  const onPassword = async () => {
    var values = {
      pass,
      confirmPass,
    };

    const token = window.location.pathname.split("/")[2];
    const msg = await resetPassword(token, values);
    var res_msg = document.getElementById("alert_msg");
    res_msg.innerHTML = msg;
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
              onChange={(e) => {
                setConPass(e.currentTarget.value);
              }}
              value={confirmPass}
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

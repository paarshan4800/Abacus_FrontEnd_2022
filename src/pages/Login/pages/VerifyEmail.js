import React, { Component, useState, useEffect } from "react";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";
import { green } from "@material-ui/core/colors";
import axios from "axios";

function VerifyEmail(props) {
  const [status, setStatus] = useState("checking");
  const [emailID, setEmailID] = useState("");
  const [message, setMessage] = useState("");

  const verifyUser = () => {
    const search = props.location.search;
    const email = new URLSearchParams(search).get("email");
    setEmailID(email);
    const code = new URLSearchParams(search).get("code");

    axios
      .post("http://abacus-22-backend.herokuapp.com/user/signup/verifyUser", {
        email,
        code,
      })
      .then((response) => {
        if (response.status == 200) {
          setMessage(response.data.message);
          setStatus("verified");
          setTimeout(() => {
            window.location = "http://localhost:3000/Login#/sign-in";
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setMessage(err.response.data.message);
        setStatus("checking");
      });
  };

  useEffect(verifyUser, []);

  return (
    <div className={logstyle.formCenter}>
      <p>
        Your email id: <span style={{ color: "#f0f0f0" }}>{emailID}</span>
        <br />
        Is{" "}
        {status === "verified" ? (
          <span style={{ color: "lightgreen" }}>VERIFIED</span>
        ) : (
          <span style={{ color: "yellow" }}>being verified</span>
        )}
        <br />
        {message}
      </p>
    </div>
  );
}
export default VerifyEmail;
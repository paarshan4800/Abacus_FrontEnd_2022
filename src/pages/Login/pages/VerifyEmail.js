import React, { Component, useState, useEffect } from "react";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";
import { green } from "@material-ui/core/colors";
import { verifyUserAPI } from "../../../api/auth";
import axios from "axios";
import { toast } from "react-toastify";

function VerifyEmail(props) {
  const [status, setStatus] = useState("checking");
  const [emailID, setEmailID] = useState("");
  const [message, setMessage] = useState("");

  const verifyUser = async () => {
    const search = props.location.search;
    const email = new URLSearchParams(search).get("email");
    setEmailID(email);
    const code = new URLSearchParams(search).get("code");
    const res = await verifyUserAPI(email, code);
    setMessage(res.message);
    setStatus(res.status);
    if (res.status === "verified") {
      toast.success("✅" + res.message);
      setTimeout(() => {
        window.location = "http://localhost:3000/Login#/sign-in";
      }, 2000);
    }
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

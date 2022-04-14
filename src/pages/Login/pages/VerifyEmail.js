import React, { Component, useState, useEffect } from "react";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton";
import { green } from "@material-ui/core/colors";
import { verifyUserAPI } from "../../../api/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function VerifyEmail(props) {
  const [status, setStatus] = useState("checking");
  const [emailID, setEmailID] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const verifyUser = async () => {
    const search = props.location.search;
    const email = new URLSearchParams(search).get("email");
    setEmailID(email);
    const code = new URLSearchParams(search).get("code");
    const res = await verifyUserAPI(email, code);
    setMessage(res.message);
    setStatus(res.status);
    if (res.status === "verified") {
      toast.success(res.message);
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    } else {
      toast.error(res.message);
    }
  };

  useEffect(verifyUser, []);

  return (
    <div className={`${logstyle.verifyEmail} container`}>
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

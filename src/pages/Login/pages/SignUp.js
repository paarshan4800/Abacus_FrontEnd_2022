import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import departments from "./assets/departments";
import years from "./assets/years";
import colleges from "./assets/colleges";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton.js";
import axios from "axios";
import GoogleButton from "react-google-button";
import { googleSignIn } from "../../../api/auth";
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { FaApple } from "react-icons/fa";
import LoginRegister from "../LoginRegister";

//import ;
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");
  const [conpass, setConpass] = useState("");
  const [year, setYear] = useState("");
  const [nonChangable, setNonChangable] = useState(false);
  const [googleAuth, setGoogleAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [validationError, setvalidationError] = useState("");

  const validate = () => {
      let validationError = '';

        if (!name) {
          validationError = 'Name field cannot be blank';
        } 
        else if (!email) {
          validationError = 'Email field cannot be blank';
        }
        else if (!email.includes('@')) {
          validationError = 'Invalid Email! Try a different one!';
        }
        else if (!phone) {
          validationError = 'Phone field cannot be blank';
        }
        else if (phone < 1000000000 || phone > 9999999999) {
          validationError = 'Invalid Phone Number';
        }
        else if (!password) {
          validationError = 'Password field cannot be blank';
        }
        else if (!conpass) {
          validationError = 'Confirm Password field cannot be blank';
        }
        else if (!department) {
          validationError = 'Department field cannot be blank'
        }
        else if (!college) {
          validationError = 'College field cannot be blank'
        }
        else if (!year) {
          validationError = 'Year field cannot be blank'
        }

        if (!validationError && (conpass !== password)) {
          validationError = 'Passwords do not match';
        }

        if (validationError) {
          setvalidationError(validationError);
          return false;
        }
        return true;
  }

  const checkWhichPage = () => {
    const url = new URL(window.location.href);
    // console.log(url);
    const searchparams = new URLSearchParams(url.search);
    // console.log(searchparams);
    // console.log("hello");
    if (searchparams.has("email")) {
      //
      setEmail(searchparams.get("email"));
    }
    if (searchparams.has("name")) {
      setName(searchparams.get("name"));
      setNonChangable(true);
    }
    if (searchparams.has("message")) {
      console.log(searchparams.get("message"));
      window.alert(searchparams.get("message"));
      setMessage(searchparams.get("message"));
    }
    if (searchparams.has("googleAuth")) {
      setGoogleAuth(searchparams.get("googleAuth"));
    }

    if (searchparams.has("verificationCode"))
      setVerificationCode(searchparams.get("verificationCode"));
    // console.log(searchparams.get("id_token"));
  };

  useEffect(checkWhichPage, []);
  const handleSubmit = () => {
    const isValid = validate();
    if (isValid) {
    var values = {
      email,
      name,
      phoneNumber: phone,
      college: college.value,
      year: year.value,
      department: department.value,
      password,
      googleAuth,
    };
    if (verificationCode != "") {
      values.verificationCode = verificationCode;
    }


    const BASE_URL = "https://abacus-22-backend.herokuapp.com/";
    // const BASE_URL = "http://localhost:8000/";
    const signupURL = googleAuth
      ? BASE_URL + "user/signup/googleSignUp"
      : BASE_URL + "user/signup/newUser";

    axios
      .post(signupURL, values)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          alert(response.data.message);
          // setMessage(response.data.message);
          window.location = "http://localhost:3000/Login#/sign-in";
        }
        console.log(response);
      })
      .catch((err) => {
        if (err.response.data.code === 11000) {
          alert(
            err.response.data.keyValue.email +
              "is already registered. Go to login"
          );
          setTimeout(() => {
            window.location = "http://localhost:3000/Login#/sign-in";
          }, 300);
        } else {
          console.log(err.response.data);
        }
      });

    console.log(values);
    }
    else
    {
      console.log(validationError);
    }
  };
  // console.log(year); 
  return (
    <div className={logstyle.appForm}>
    <div className={logstyle.formCenter}>
      <div className={logstyle.styleButton}>
        {googleAuth ? (
          <p>{message}</p>
        ) : (
          <GoogleButton
            className="google-button"
            onClick={() => {
              googleSignIn();
            }}
            label="Sign Up with Google"
            type="dark"
          />
        )}
      </div>

      <p>or </p>
      <form onSubmit={() => handleSubmit()} className={logstyle.formFields}>
        {/*name*/}

        <div className={logstyle.formField}>
          <div style={{}}>
          <input
            type="text"
            id="name"
            className={logstyle.formFieldInput}
            placeholder="Enter your full name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            disabled={nonChangable ? true : false}
          />
          </div>
        </div>

        {/*year*/}
        <div className={logstyle.formField}>
          <Select
            className={logstyle.drop}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            options={years.map((opt) => ({ label: opt, value: opt }))}
            value={year}
            onChange={(e) => {
              setYear(e);
            }}
            placeholder="Year"
          />
        </div>

        {/*department*/}
        <div className={logstyle.formField}>
          <Select
            className={logstyle.drop}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            options={departments.map((opt) => ({ label: opt, value: opt }))}
            value={department}
            onChange={(e) => {
              setDepartment(e);
            }}
            placeholder="Department"
          />
        </div>

        {/*college*/}
        <div className={logstyle.formField}>
          <Select
            className={logstyle.drop}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            options={colleges.map((opt) => ({ label: opt, value: opt }))}
            value={college}
            onChange={(e) => {
              setCollege(e);
            }}
            placeholder="College"
          />
        </div>

        <div className={logstyle.formField}>
          <input
            type="email"
            id="email"
            className={logstyle.formFieldInput}
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            disabled={nonChangable ? true : false}
          />
        </div>
        <div className={logstyle.formField}>
          <input
            type="text"
            id="phone"
            className={logstyle.formFieldInput}
            placeholder="Enter your Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
        </div>
        <div className={logstyle.formField}>
          <input
            type="password"
            id="password"
            className={logstyle.formFieldInput}
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        {/*confirm password*/}
        <div className={logstyle.formField}>
          <input
            type="password"
            id="conpass"
            className={logstyle.formFieldInput}
            placeholder="Confirm your password"
            name="conpass"
            value={conpass}
            onChange={(e) => setConpass(e.currentTarget.value)}
          />
        </div>

        <div className={logstyle.styleButton}>
            <GlassButton title="Sign Up" />
        </div>

      </form>
    </div>
    </div>
  );
  //}
}
export default SignUp;

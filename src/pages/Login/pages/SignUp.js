import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import departments from "./assets/departments";
import years from "./assets/years";
import colleges from "./assets/colleges";
import logstyle from "./../logstyle.module.css";
import GlassButton from "../../../components/GlassButton/GlassButton.js";

function SignUp()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [college, setCollege] = useState("");
    const [password, setPassword] = useState("");
    const [conpass, setConpass] = useState("");
    const [year, setYear] = useState("");
    const [validationError, setvalidationError] = useState('');


    //const validate = () => {
    function validate(){
      let validationError = '';

      if (!name) {
          validationError = 'Name field cannot be blank';
      } else if (!email) {
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
    
   function submit(){
    const isValid = validate();
    console.log(validationError);
    if (isValid) {
        
        }
        else {
            
        }
        // api
  }

    return (
      <div className={logstyle.formCenter}>
        <form /*onSubmit={this.handleSubmit}*/ className={logstyle.formFields}>
          {/*name*/}
          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="name">
              Full Name
            </label>
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
            />
          </div>

          {/*year*/}
          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="year">
              Year
            </label>
            <Select className={logstyle.drop} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={years.map(opt => ({ label: opt, value: opt }))}
            value={year}
            onChange={(e) => {
              setYear(e);
            }}
            placeholder="Year" />
          </div>

          {/*department*/}
          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="dept">
              Department
            </label>
            <Select className={logstyle.drop} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={departments.map(opt => ({ label: opt, value: opt }))}
            value={department}
            onChange={(e) => {
              setDepartment(e);
            }}
            placeholder="Department" />
          </div>

            {/*college*/}
          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="colg">
              College
            </label>
            <Select className={logstyle.drop} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={colleges.map(opt => ({ label: opt, value: opt }))} 
            value={college}
            onChange={(e) => {
              setCollege(e);
            }}
            placeholder="College" />
          </div>

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
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
           {/*phone*/}
           <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="phone">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              className={logstyle.formFieldInput}
              placeholder="Enter your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
            />
          </div>
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
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
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
              value={conpass}
              onChange={(e) => setConpass(e.currentTarget.value)}
            />
          </div>
          <div className={logstyle.formField}>
          {validationError ? (<div style="color: red;">{validationError}</div>) : null}
            {/*<button className={logstyle.formFieldButton}>Sign Up</button>{" "}*/}
            <div className={logstyle.styleButton}>
            <button onClick={(e)=>{
              e.preventDefault();
              console.log("pressed");
              let isValid = validate();
              console.log(isValid);
            }}>
              <GlassButton title="Sign Up"/>
            </button>
            </div>
          </div>
          <div className={logstyle.formField}>
            <Link to="/sign-in" className={logstyle.formFieldLink}>
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  //}
}
export default SignUp;

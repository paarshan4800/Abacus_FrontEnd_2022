import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import departments from "./assets/departments";
import years from "./assets/years";
import colleges from "./assets/colleges";
import logstyle from "./../logstyle.module.css";
class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      year: "",
      dept: "",
      colg: "",
      phone: "",
      conpass: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className={logstyle.formCenter}>
        <form onSubmit={this.handleSubmit} className={logstyle.formFields}>
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
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          {/*year*/}
          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="year">
              Year
            </label>
            <Select className={logstyle.drop}  components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={years.map(opt => ({ label: opt, value: opt }))}
            onChange={this.handleChange} 
            placeholder="Year" />
          </div>

          {/*department*/}
          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="dept">
              Department
            </label>
            <Select className={logstyle.drop} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={departments.map(opt => ({ label: opt, value: opt }))}
            onChange={this.handleChange} 
            placeholder="Department" />
          </div>

            {/*college*/}
          <div className={logstyle.formField}>
            <label className={logstyle.formFieldLabel} htmlFor="colg">
              College
            </label>
            <Select className={logstyle.drop} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={colleges.map(opt => ({ label: opt, value: opt }))}
            onChange={this.handleChange} 
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
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.phone}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
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
              value={this.state.conpass}
              onChange={this.handleChange}
            />
          </div>


          <div className={logstyle.formField}>
            <button className={logstyle.formFieldButton}>Sign Up</button>{" "}
            </div>
            <div className={logstyle.formField}>
            <Link to="/sign-in" className={logstyle.formFieldLink}>
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;

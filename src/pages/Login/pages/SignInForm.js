import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import logstyle from "./../logstyle.module.css";
class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
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

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
    <Router>
      <div className={logstyle.formCenter}>
        <form className={logstyle.formFields} onSubmit={this.handleSubmit}>
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

          <div className={logstyle.formField}>
            <button className={logstyle.formFieldButton}>Sign In</button>{" "}
            <NavLink to="/ForgotPassword" className={logstyle.formFieldButtonDirected} >
              Forgot Password?
            </NavLink>
            </div>
            <div className={logstyle.formField}>
            <NavLink to="/" className={logstyle.formFieldLink}>
              Create an account
            </NavLink>
            <Route path="/ForgotPassword" component={ForgotPassword} />
          </div> 
        </form>
      </div>
      </Router>
    );
  }
}

export default SignInForm;

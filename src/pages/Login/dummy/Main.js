import { Card } from "@material-ui/core";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import logstyle from "./../logstyle.module.css";
import SignUp from "../pages/SignUp";
import SignInForm from "../pages/SignInForm";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
const FlippyStyle = {
    width: '60%',
    height: '60%',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '3vh',
    justifyContent: 'center'
  }

  const DefaultCardContents = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#11998e',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <SignUp />
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%',
            fontFamily: 'sans-serif',
            fontSize: '3vh'
          }}>
          {children}<br />
          To login
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#38ef7d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        <SignInForm />
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%',
            fontFamily: 'sans-serif',
            fontSize: '3vh'
          }}>
          {children}<br />
          To create a new Account
        </span>
      </BackSide>
    </React.Fragment>);

class Main extends React.Component{
    constructor() {
        super();
    }
    render(){
        return (
            <div classname={logstyle.LoginRegisterBg} style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
            <Flippy
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <DefaultCardContents>
              <input type="button" value="Click here" style={{fontFamily: 'sans-serif',
    fontSize: '3vh'}} onClick={() => this.flippyHorizontal.toggle()}></input>
            </DefaultCardContents>
          </Flippy>
          </div>
        );
    }
}
export default Main;
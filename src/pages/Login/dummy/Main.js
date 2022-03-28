import { Card } from "@material-ui/core";
import ReactDOM from "react-dom";
import React, { useState, useEffect, Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import logstyle from "./../logstyle.module.css";
import SignUp from "../pages/SignUp";
import SignInForm from "../pages/SignInForm";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Left } from "react-bootstrap/lib/Media";
import GlassButton from "../../../components/GlassButton/GlassButton.js";

// const FlippyStyle = {
//     width: width={flipPageWidth},
//     height: '40%',
//     textAlign: 'center',
//     color: '#FFF',
//     fontFamily: 'sans-serif',
//     fontSize: '3vh',
//     justifyContent: 'center',
//   }

  // const DefaultCardContents = ({ children }) => (
  //   <React.Fragment>
  //     <FrontSide
  //       style={{
  //         // backgroundColor: '#11998e',
  //         display: 'flex',
  //         alignItems: 'center',
  //         flexDirection: 'column'
  //       }}
  //     >
  //       <SignInForm />
  //       <span 
  //         style={{
  //           fontSize:'12px',
  //           position: 'absolute',
  //           bottom: '10px',
  //           width: '100%',
  //           fontFamily: 'sans-serif',
  //           fontSize: '3vh'
  //         }}>
  //         {children}<br />
  //         To signUp
  //       </span>
  //     </FrontSide>
  //     <BackSide
  //       style={{
  //         // backgroundColor: '#38ef7d',
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         flexDirection: 'column'
  //       }}>
  //       <SignUp />
  //       <span 
  //         style={{
  //           fontSize:'12px',
  //           position: 'absolute',
  //           bottom: '10px',
  //           width: '100%',
  //           fontFamily: 'sans-serif',
  //           fontSize: '3vh'
  //         }}>
  //         {children}<br />
  //         To Login
  //       </span>
  //     </BackSide>
  //   </React.Fragment>);

class Main extends React.Component{
  

    constructor() {

  // useEffect(() => {
  // if (window.innerWidth > 1450) {
  //                 this.setState({width: 500});
  //             } else {
  //               this.setState({width: 200});
  //             }
  // }, []);
        super();
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render(){
        return (
            <div classname={logstyle.LoginRegisterBg} style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
            <Flippy
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={{
              width: this.state.width,
              height: '40%',
              textAlign: 'center',
              color: '#FFF',
              fontFamily: 'sans-serif',
              fontSize: '3vh',
              justifyContent: 'center'}}
            >
              {/* 
              <DefaultCardContents>
              <input type="button" value="Click here" style={{fontFamily: 'sans-serif',
    fontSize: '3vh'}} onClick={() => this.flippyHorizontal.toggle()}></input>
            </DefaultCardContents> */}
          <FrontSide
          style={{
          // backgroundColor: '#11998e',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
          }}
          >
        <div className={logstyle.styleButton}>
            <GlassButton title="To SignUp" onClick={() => this.flippyHorizontal.toggle()} />
        </div>
        <SignInForm />
      </FrontSide>
      <BackSide
        style={{
          // backgroundColor: '#38ef7d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        <div className={logstyle.styleButton}>
            <GlassButton title="To Login" onClick={() => this.flippyHorizontal.toggle()} />
        </div>
        <SignUp />
      </BackSide>
          </Flippy>
          </div>
        );
    }
}
export default Main;
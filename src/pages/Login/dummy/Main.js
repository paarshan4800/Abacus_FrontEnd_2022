import { Card } from "@material-ui/core";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import logstyle from "./../logstyle.module.css";
import SignUp from "../pages/SignUp";
import SignInForm from "../pages/SignInForm";
function Main(){
    const [style,setStyle] = useState("Card");
    const changeStyle = () => {
        let ele = document.getElementById("TheCard");
        ReactDOM.findDOMNode(ele).style.color = 'white';
        ReactDOM.findDOMNode(ele).style.transform = "rotateY(180deg)";
    };

    return(
        <div className={logstyle.main}>
        <button id="Car" onClick={changeStyle} className={logstyle.butchange} >Click</button>
        <div id="TheCard" className={logstyle.Card} >
            <div className={logstyle.Front}>
                <SignUp />
            </div>
            <div className={logstyle.Back}>
                <SignInForm />
            </div>
        </div>
        </div>
    )
}
export default Main;
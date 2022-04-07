import React, { useContext } from 'react'

import NavbarBig from '../NavbarBig/NavbarBig';
import NavbarSmall from '../NavbarSmall/NavbarSmall';

import { useHistory, withRouter } from 'react-router-dom'
/*
import { SetAuthApi } from "../../App"
import { AuthApi } from "../../App"
import Cookies from "js-cookie"
*/

import {logOut} from "../../api/auth"
function Navbar({ width }) {
/*
    const SetAuth = useContext(SetAuthApi)
    const Auth = useContext(AuthApi)
    const history = useHistory()

    const logout = () => {
        if (Auth) {
            if (Cookies.get("token") && Cookies.get("details")) {
                Cookies.remove("token")
                Cookies.remove("details")
            }
            SetAuth(false)
            toast.success("Logged Out Successfully", {
                position: toast.POSITION.BOTTOM_LEFT
            })
            history.push("/homepage")
        }
    }
*/
    return (
        <>
            { width < 903 ? (<NavbarSmall clickLogout={()=>{logOut()}}  />) : (<NavbarBig clickLogout={()=>{logOut()}}  />)}
        </>
    )

}

export default Navbar
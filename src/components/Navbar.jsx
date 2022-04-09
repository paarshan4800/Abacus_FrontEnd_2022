import React,{useContext,createRef,Component} from "react";
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import styles1 from './navsmall.module.css'
import { AuthApi } from '../App'
import {logOut} from "../api/auth"





import { StylesContext } from "@material-ui/styles";



const LinksList = [{
  title: "Home",
  link: "/"
}, {
  title: "About Us",
  link: "/about-us"
}, {
  title: "Events",
  link: "/events"
}, {
  title: "Workshops",
  link: "/workshops"
}, {
  title: "Login",
  link: "/signup"
}]


function NavbarBig({ clickLogout }) {

  const Auth = useContext(AuthApi)


  return (
      <div className={`${styles._navbar}`}>
          <div className={`${styles._navbar_brand}`} >
              <Link to="/" className={`${styles._navbar_brand}`}>
                 <span className={`${styles._navbar_brand} `} >ABACUS'22 </span>
              </Link>
          </div>

          <div className={`${styles._navbar_main}`}>
              <Link className={`${styles._navbar_main_link}`}  to="/" 
activeStyle={{ color: '#ff2483' }}>
                  <span className={`${styles._navbar_main_link_text}`}>Home</span>
              </Link>

              <Link className={`${styles._navbar_main_link}`} to="/aboutus" 
activeStyle={{ color: '#ff2483' }}>
                  <span className={`${styles._navbar_main_link_text}`}>About Us</span> 
              </Link>

              <Link className={`${styles._navbar_main_link}`} to="/events" 
activeStyle={{ color: '#ff2483' }}>
                  <span className={`${styles._navbar_main_link_text}`}>Events</span>
              </Link>

              <Link className={`${styles._navbar_main_link}`} to="/workshops" 
activeStyle={{ color: '#ff2483' }}>
                  <span className={`${styles._navbar_main_link_text}`}>Workshops</span> 
              </Link>

              {/* Conditionally rendering based on Authentication */}
              {/* {Auth ?
                  (<><Link className={`${styles._navbar_main_link}`} to="/dashboard" 
                  activeStyle={{ color: '#ff2483' }}>
                      <span className={`${styles._navbar_main_link_text}`}>Dashboard</span>
                  </Link>
                  <Link to="" className={`${styles._navbar_main_link}`} onClick={clickLogout} activeClassName="selected"
activeStyle={{ color: '#ff2483' }}>
                      <span className={`${styles._navbar_main_link_text}`}>Logout</span>
                  </Link></>
                  )
                  :
                  (<Link className={`${styles._navbar_main_link}`} to="/login-register" activeClassName="selected"
                  activeStyle={{ color: '#ff2483' }}>
                      <span className={`${styles._navbar_main_link_text}`}>Login</span>
                  </Link>)} */}


          </div>
      </div>
  )
}




function NavbarSmall({clickLogout}) {

    const Auth = useContext(AuthApi)

   

    return (
        <nav role="navigation">
  <div className={styles1.menuToggle}>
    <input type="checkbox" className={styles1.check}/>
    <span className={styles1.span}></span>
    <span className={styles1.span}></span>
    <span className={styles1.span}></span>
    
    <ul className={styles1.menu}>
      <Link to="/"><li>Home</li></Link>
      <Link to="/aboutus"><li>About us</li></Link>
      <Link to="/events"><li>Events</li></Link>
      <Link to="/workshops"><li>Workshops</li></Link>
      {/* <Link to="/login"><li>Login</li></Link> */}
    </ul>
  </div>
</nav>

    )
}
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
          { width < 1350 ? (<NavbarSmall  />) : (<NavbarBig  />)}
      </>
  )

}


export default Navbar;



      








import React,{useContext} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'
import logo from "./CSEA.png";
import styles from './Navbar.module.css'
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
const Navbar = () => {
  const Auth = useContext(AuthApi)
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  const [currentPage , setCurrentPage] = React.useState('/')

  const changeBackground = () => { 
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

  }

  const widthChange = () => {
    if (window.innerWidth > 1150 ) {
      return (
      <Link to={`/`} style={{textDecoration:"none", color:"#fff"}}   className={styles.font} >
      ABACUS '22
      </Link>
      )
      
    }
    
  }

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('resize', widthChange);

const changeButton = ()=>{
  
    return(<>
    <li className="bg-[#11998e] py-2 px-4 mx-2 mt-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
        <Link to={`/dashboard`} style={{textDecoration:"none", color:"#fff",textAlign:"center"}}   onClick={()=>setToggleMenu(false)} className={styles.nav}>Dashboard</Link>
        </li>
      <li className="bg-[#890F0D] py-2 px-3 mx-4 mt-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
      <Link style={{textDecoration:"none", color:"#fff",textAlign:"center"}}   onClick={()=>{logOut();setToggleMenu(false);}} className={styles.nav}>Logout</Link>
      </li>

    
  </>)
  }

  return (
    <nav className={navbar ? `w-full flex md:justify-center justify-between items-center fixed gradient-bg-welcome z-10 text-2xl font-sans` : `font-sans w-full flex md:justify-center justify-between items-center fixed z-10 text-2xl nav`}>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">

        {widthChange()}

      </div>
      <ul className={`text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ${styles.nav} ml-6`}>
        {["Home", "aboutus", "Events", "workshops"].map((item, index) =>

          // <NavBarItem key={item + index} title={item.toUpperCase()} className={styles.nav} link={`/${item}`}/>

          <li className={`hover:bg-[#8A2BD6] py-2 px-3 mx-4 mt-3 hover:rounded-full hover:cursor-pointer  ${styles.nav}`}
            
          ><Link to={`/${item}`} style={{textDecoration:"none", color:"#fff"}}   className={styles.nav} >{item}</Link></li>
        )}
         {Auth ?

          
            ( 
            changeButton()
            ) 
            :
            (  <li className="bg-[#11998e] py-2 px-7 mx-2 mt-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <Link to={`/LOGIN`} style={{textDecoration:"none", color:"#fff",textAlign:"center"}}   onClick={()=>setToggleMenu(false)} className={styles.nav}>Login</Link>
            </li>)
            }
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={38} className="text-white md:hidden cursor-pointer" padding="10px" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={38} className="text-white md:hidden cursor-pointer mx-2" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className={`z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in  ${styles.nav_mobile}`}
            
          >
            <li className="text-3xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Home", "aboutus", "Events", "Workshops"].map(
              (item, index) =>

                // <NavBarItem key={item + index} title={item.toUpperCase()} classprops="my-2 text-lg" link={`/${item}`} />
                <li className={`
                hover:bg-[#8A2BD6]
                py-2 
                px-7 mx-4 hover:rounded-full hover:cursor-pointer  ${styles.nav}`} 
               
                ><Link to={`/${item}`} style={{textDecoration:"none", color:"#fff"}}   className={styles.nav} >{item}</Link></li>
            )}
            {Auth ? 
             
              ( 
            <>
            <li className="bg-[#00008b] py-2 px-7 mx-4 mt-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <Link to={`/dashboard`} style={{textDecoration:"none", color:"#fff",textAlign:"center"}}   onClick={()=>setToggleMenu(false)} className={styles.nav}>Dashboard</Link>
            </li>

            <li className="bg-[#890F0D] py-2 px-7 mx-4 mt-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <Link to={`/logout`} style={{textDecoration:"none", color:"#fff",textAlign:"center"}}   onClick={()=>setToggleMenu(false)} className={styles.nav}>Logout</Link>
            </li>
            </>
            ) 
            
            :
            (  <li className="bg-[#2952e3] py-2 px-7 mx-4 mt-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <Link to={`/LOGIN`} style={{textDecoration:"none", color:"#fff",textAlign:"center"}}   onClick={()=>setToggleMenu(false)} className={styles.nav}>Login</Link>
            </li>)
            }
           
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;


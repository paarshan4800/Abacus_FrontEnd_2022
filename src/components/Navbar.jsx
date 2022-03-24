import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom'
import logo from "../images/logo.png";
import styles from './Navbar.module.css'

import { StylesContext } from "@material-ui/styles";

const NavBarItem = ({ title, classprops, link }) => (
  <li className={`
  hover:bg-[#8A2BD6]
  py-2 
  px-7 mx-4 hover:rounded-full hover:cursor-pointer  ${classprops} ${styles.nav}`} 
  onClick={()=>{window.location=link}}
  ><a style={{textDecoration:"none", color:"#fff"}}   className={styles.nav}>{title}</a></li>
);


const LinksList = [{
  title:"Home",
  link: "/"
}, {
  title: "About Us",
  link: "/about-us"
}, {
  title: "Events",
  link: "/events"
}, {
  title: "Workshops",
  link:"/workshops"
},{
  title: "Login",
  link: "/Login"
}]
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 768){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
    
  }

  const widthChange = () =>{
    if (window.innerWidth > 1150){
       return  <img src={logo} alt="logo" className="w-32 cursor-pointer" />
    }
  }

  window.addEventListener('scroll',changeBackground);
  window.addEventListener('resize', widthChange);
  

  return (
    <nav className={navbar ? `w-full flex md:justify-center justify-between items-center fixed gradient-bg-welcome z-10 text-2xl font-sans` : `font-sans w-full flex md:justify-center justify-between items-center fixed z-10 text-2xl nav`}>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      
       {widthChange()}

      </div>
      <ul className={`text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ${styles.nav}`}>
        {["Home", "About-us", "Events", "workshops"].map((item, index) => 
          
          <NavBarItem key={item + index} title={item.toUpperCase()} className={styles.nav} link={`/${item}`}/>
          
         
        )}
        <li className={`bg-[#11998e] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[blue]  ${styles.nav}`}>
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Home", "about-us", "Events", "Workshops"].map(
              (item, index) =>
              
               <NavBarItem key={item + index} title={item.toUpperCase()} classprops="my-2 text-lg" link={`/${item}`} />
              
            )}
            <li className="bg-[#2952e3] py-2 px-7 mx-4 mt-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <NavBarItem  title="LOGIN"  link={`/Login`} />
          </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;


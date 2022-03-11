import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../images/logo.png";

const NavBarItem = ({ title, classprops, link }) => (
  <li className={`
  hover:bg-[#8A2BD6]
  py-2 
  px-7 mx-4 hover:rounded-full hover:cursor-pointer  ${classprops}`} 
  onClick={()=>{window.location=link}}
  ><a style={{textDecoration:"none", color:"#fff"}} >{title}</a></li>
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
    if (window.scrollY >= 20){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
    // console.log(window.scrollY)
  }

  window.addEventListener('scroll',changeBackground);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
    {/* <nav className={navbar ? 'w-full flex md:justify-center justify-between items-center fixed gradient-bg-welcome z-10' : 'w-full flex md:justify-center justify-between items-center fixed z-10'}> */}
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" onClick={()=>{window.location="/"}}/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
  {/* {["Home", "About us", "Events", "signup"].map( */
            LinksList.map(
              (item, index) => <NavBarItem key={item.title + index} title={item.title} link={item.link} classprops="my-2 text-lg" />,
            )}
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}
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
            className="z-10 fixed -top-0 -right-2 p-3 w-[60vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {/* {["Home", "About us", "Events", "signup"].map( */
            LinksList.map(
              (item, index) => <NavBarItem key={item.title + index} title={item.title} link={item.link} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


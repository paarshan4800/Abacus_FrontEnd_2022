import NavbarSmall from "../NavbarSmall/NavbarSmall";
import NavbarBig from "../NavbarBig/NavbarBig";

const Navbar = (props) => {

    const width = props.width;

    return ( 
        <>
            {width < 903 ? (<NavbarSmall  />) : (<NavbarBig  />)}
        </>
     );
}
 
export default Navbar;
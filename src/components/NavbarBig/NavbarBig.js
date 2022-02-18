import { Link } from "react-router-dom";
import GlassButton from "../GlassButton/GlassButton";
import styles from "./NavbarBig.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbarBig}>
        <h1>ABACUS'22</h1>
        <div className={styles.buttons} >
          <GlassButton title="Home"/>
          <GlassButton title="About us"/>
          <GlassButton title="Events"/>
          <GlassButton title="Workshop"/>
          <GlassButton title="Dashboard" link="/dashboard"/>
          <GlassButton title="Login" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

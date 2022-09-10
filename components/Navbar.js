import styles from "../styles/Navbar.module.css";
import NavMenu from "./NavMenu.js";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <NavMenu />
    </nav>
  );
};

export default Navbar;

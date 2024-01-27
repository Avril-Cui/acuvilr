import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./manu.module.css";

function Manu() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <ul className={styles.navbar}>
      <li className={styles.navItem}>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Manu;

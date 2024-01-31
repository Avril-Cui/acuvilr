import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./manu.module.css";
import Image from "next/image";
function Manu() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={styles.manu}>
      <div className={styles.logo}>
        <Image src="/logo.png" width="45" height="45" alt="" />
      </div>
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
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Manu;

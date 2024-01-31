import styles from "./work.module.css";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Work() {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <p className={styles.title}>What are my works?</p>
        <div className={styles.center}>
          <p className={styles.description_first}>
            As a <span style={{ color: "#FFE400" }}>software engineer</span>, I
            build high-tech products that can benefit the end users. As a{" "}
            <span style={{ color: "#FFE400" }}>designer</span>, I design user
            interface and 3D models that are “cool” and unique, aiming for a
            better user experience. As a{" "}
            <span style={{ color: "#FFE400" }}>blogger</span>, I share my
            opinions about technology, economics, or ... just my daily life.
          </p>
        </div>
        <div className={styles.center}>
          <div className={styles.inline}>
            <Link
              className={styles.color_link}
              activeClass="active"
              to="code"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Code Work
            </Link>
            <Link
              className={styles.color_link}
              activeClass="active"
              to="design"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Design
            </Link>
            <a
              href="https://medium.com/@avrilcui17"
              target="_blank"
              className={styles.color_link}
            >
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <Image src="/background_logo.png" width={520} height={670} alt="" />
      </div>
    </div>
  );
}

export default Work;

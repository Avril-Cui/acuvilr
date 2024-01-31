import React from "react";
import styles from "./header.module.css";
import logo from "../public/logo.png";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.header}>
      {/* <Image src={logo} width="45" height="45" alt="" /> */}
      <p className={styles.title}>acuvilr.one</p>
    </div>
  );
}

export default Header;

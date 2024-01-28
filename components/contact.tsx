import React, { useState, useRef } from "react";
import EarthCanvas from "./canvas/Earth";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.earth}>
        <EarthCanvas />
      </div>
      <div className={styles.description}>
        If you are interested in any of my works, want to collaborate with me on
        anything, want to reach out to me, or just want to say hi, feel free to
        contact me via email (<span>AvrilCui17@gmail.com</span>),{" "}
        <span>
          <a href="https://twitter.com/CuiAvril" target="_blank">
            Twitter
          </a>
        </span>
        , or follow me on{" "}
        <span>
          <a href="https://github.com/Avril-Cui" target="_blank">
            GitHub
          </a>
        </span>
        , <span>Instagram</span>.
      </div>
    </div>
  );
};

export default Contact;

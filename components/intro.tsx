import React from "react";
import Header from "./header";
import styles from "./intro.module.css";
import ComputersCanvas from "./canvas/computers";

function Intro(props: any) {
  return (
    <div
      className={styles.container}
      id={props.id}
    >
      <div className={styles.inline}>
        <div>
          <p className={styles.greeting}>Salve, mihi nomen est</p>
          <p className={styles.name}>Avril Cui.</p>
          <p className={styles.passion}>I love to build things</p>
          <p className={styles.details}>
            A so-called full-stack engineer. Also a high school student
            interested all cool things coding can do.
          </p>
        </div>
        <div className={styles.computer}>
          <ComputersCanvas />
        </div>
      </div>
    </div>
  );
}

export default Intro;

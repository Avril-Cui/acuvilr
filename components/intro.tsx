import React from "react";
import Header from "./header";
import styles from "./intro.module.css";
import ComputersCanvas from "./canvas/computers";
import dynamic from "next/dynamic";

function Intro(props: any) {
  return (
    <div className={styles.container} id={props.id}>
      <p className={styles.name}>
        print(<span>"</span>I am Avril.<span>"</span>)
      </p>
      <p className={styles.passion}>
        I love to <span>build things.</span>
      </p>
      <div className={styles.center}>
        <p className={styles.details}>
          A so-called full-stack engineer. Also a high school student interested
          all cool things coding can do.
        </p>
      </div>
      <div className={styles.computer}>
          <ComputersCanvas />
        </div>
    </div>
  );
}

export default Intro;

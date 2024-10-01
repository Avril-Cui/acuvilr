import React from "react";
import styles from "./intro.module.css";
import ComputersCanvas from "./canvas/computers";

function Intro(props: any) {
  return (
    <div className={styles.container} id={props.id}>
      <p className={styles.name}>
        print(<span>&quot;</span>I am Avril.<span>&quot;</span>)
      </p>
      <p className={styles.passion}>
        I love to <span>build things.</span>
      </p>
      <div style={{ width: "100vw" }}>
        <div className={styles.center}>
          <p className={styles.details}>
            A so-called full-stack engineer. I am
            interested all cool things coding can do.
          </p>
        </div>
      </div>
      <div style={{ width: "100vw" }}>
        <div className={styles.computer}>
          <ComputersCanvas />
        </div>
      </div>
    </div>
  );
}

export default Intro;

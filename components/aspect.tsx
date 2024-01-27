import styles from "./work.module.css";
import Image from "next/image";
import aspect_demo from "../public/aspect.png";

function Aspect() {
  return (
    <div className={styles.container}>
      <div className={styles.aspect_logo}>
        <Image src="/aspect_logo.png" width={540} height={670} alt="" />
      </div>
      <div className={styles.intro_container}>
        <p className={styles.type}>Educational Website</p>
        <p className={styles.name}>Aspect</p>
        <p className={styles.description}>
          A website that gamifies the learning of finance and trading by
          creating a market with diverse events. Targeting young users
          interested in trading and finance, Aspect provides exciting gaming
          mechanics and a cool user interface.
        </p>
        <p className={styles.tools}>
          <span>Tools: </span>Python, Next, React, Flask, Firebase, PostgreSQL
        </p>
        <div style={{ marginTop: "5vh" }}>
          <a
            className={styles.source}
            href="https://github.com/Avril-Cui/aspect-code-demo"
            target="_blank"
          >
            <span>GitHub source code </span>&nbsp; &nbsp; &nbsp;&gt;
          </a>
        </div>
        <div style={{ marginTop: "2vh" }}>
          <a
            className={styles.source}
            href="https://www.aspect-game.com/"
            target="_blank"
          >
            <span>Website </span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &gt;
          </a>
        </div>
      </div>

      <div className={styles.aspect_demo}>
        <Image src={aspect_demo} width={660} height={420} alt="" />
      </div>
    </div>
  );
}

export default Aspect;

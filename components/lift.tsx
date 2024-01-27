import styles from "./work.module.css";
import Image from "next/image";
import lift from "../public/lift.png";
import lift_app from "../public/lift_app.png";


function Lift() {
  return (
    <div className={styles.container}>
      <div className={styles.intro_container}>
        <p className={styles.type_1}>Fitness Web App</p>
        <div className={styles.inline}>
          <p className={styles.name}>LIFT</p>
          <div className={styles.lift_logo}>
            <Image src={lift} width={110} height={60} alt="" />
          </div>{" "}
        </div>
        <p className={styles.description}>
          A website that gamifies the learning of finance and trading by
          creating a market with diverse events. Targeting young users
          interested in trading and finance, Aspect provides exciting gaming
          mechanics and a cool user interface.
        </p>
        <p className={styles.tools_1}>
          <span>Tools: </span>Python, Next, React, Flask, Firebase, PostgreSQL
        </p>
        <div style={{ marginTop: "5vh" }}>
          <a
            className={styles.source_1}
            href="https://github.com/Avril-Cui/aspect-code-demo"
            target="_blank"
          >
            <span>GitHub source code </span>&nbsp; &nbsp; &nbsp;&gt;
          </a>
        </div>
        <div style={{ marginTop: "2vh" }}>
          <a
            className={styles.source_1}
            href="https://www.aspect-game.com/"
            target="_blank"
          >
            <span>Website </span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &gt;
          </a>
        </div>
      </div>

      <div className={styles.lift_demo}>
        <Image src={lift_app} width={685} height={600} alt="" />
      </div>
    </div>
  );
}

export default Lift;

import styles from "./work.module.css";
import Image from "next/image";
import keyboard from "../public/keyboard.png";
import NavSection from "./nav_section";

function Keyboard() {
  return (
    <div className={styles.outer_container} id="section8">
      <div className={styles.center} id="code">
        <div className={styles.container}>
          <div className={styles.device_demo}>
            <Image src={keyboard} width={700} height={450} alt="" />
          </div>
          <div className={styles.intro_container_1}>
            <p className={styles.type}>Hardware and 3D Modeling</p>
            <p className={styles.name1}>Ergonomic Keyboard</p>

            <p className={styles.description}>
              <span>Overview:</span> I was diagnosed with osteoarthritis two
              years ago. But as an engineer and a student, I need to use
              keyboard frequently everyday. Adapting dactyl keyboard, I designed
              a keyboard that fits the curvature of my hand and releases pain
              after typing for a long time.
            </p>
          </div>
        </div>
      </div>
      <div>
        <NavSection />
      </div>
    </div>
  );
}

export default Keyboard;

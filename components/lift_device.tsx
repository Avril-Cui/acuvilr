import styles from "./work.module.css";
import Image from "next/image";
import lift_device from "../public/device.png";
import NavSection from "./nav_section";

function LiftDevice() {
  return (
    <div className={styles.outer_container} id="section7">
      <div className={styles.center} id="code">
        <div className={styles.container} id="design">
          <div className={styles.device_demo}>
            <Image src={lift_device} width={600} height={350} alt="" />
          </div>
          <div className={styles.intro_container_1}>
            <p className={styles.type_1}>Hardware and Software</p>
            <p className={styles.name}>LIFT Smart Device</p>

            <p className={styles.description}>
              <span>Overview:</span> A smart, attachable weightlifting device
              records and analyzes key data, such as reps during lifting
              sessions. The device empowers users to optimize their training.
              The device can be easily attached to any lifting facilities.
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

export default LiftDevice;

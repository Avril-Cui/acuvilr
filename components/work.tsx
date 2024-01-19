import styles from "./work.module.css";
import Image from "next/image";

function Work() {
  return (
    <div
      className={styles.container}
      // style={{
      //   backgroundImage: "url(/background_logo.png) ",
      //   backgroundRepeat: "no-repeat",
      //   width: "250px",
      // }}
    >
      <div className={styles.sub_container}>
        {" "}
        <p className={styles.title}>What are my works?</p>
        <div className={styles.center}>
          <p className={styles.description}>
            As a <span style={{ color: "#FFE400" }}>software engineer</span>, I
            build products that can benefit the end users. As a{" "}
            <span style={{ color: "#FFE400" }}>designer</span>, I design UI, 3D
            models, sneakers, and clothes that are “cool” and unique. As a{" "}
            <span style={{ color: "#FFE400" }}>blogger</span>, I share my
            opinions about technology, economics, or...just my daily life.
          </p>
        </div>
        <div className={styles.center}>
          <div className={styles.inline}>
            <p className={styles.color_link}>Code Work</p>
            <p className={styles.color_link}>Design</p>
            <p className={styles.color_link}>Blog</p>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <Image src="/background_logo.png" width={540} height={700} alt="" />
      </div>
    </div>
  );
}

export default Work;

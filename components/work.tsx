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
        <p className={styles.description}>
          As a software engineer, I build products that can benefit the end
          users. As a designer, I design UI, 3D models, sneakers, and clothes
          that are “cool” and unique. A a blogger, I share my opinions about
          technology, economics, or...just my daily life.
        </p>
        <div className={styles.inline}>
          <p className={styles.color_link}>Code Work</p>
          <p className={styles.color_link}>Design</p>
          <p className={styles.color_link}>Blog</p>
        </div>
      </div>
      <div className={styles.image}>
        <Image src="/background_logo.png" width={540} height={700} alt="" />
      </div>
    </div>
  );
}

export default Work;

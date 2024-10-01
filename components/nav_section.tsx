import styles from "./nav_section.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

function NavSection(props: any) {
  const [page, setPage] = useState(0);
  const setPageNumber = (page_num: number) => {
    setPage(page_num);
  };

  console.log(page);
  return (
    <div className={styles.container}>
      <p>See my other works:</p>
      <Link
        onClick={() => setPageNumber(5)}
        activeClass="active"
        to="section5"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        {" "}
        <span className={styles.section}>Aspect</span> |{" "}
      </Link>
      <Link
        onClick={() => setPageNumber(6)}
        activeClass="active"
        to="section6"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        {" "}
        <span className={styles.section}>Lift</span> |{" "}
      </Link>
      <Link
        onClick={() => setPageNumber(7)}
        activeClass="active"
        to="section7"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        {" "}
        <span className={styles.section}>Lift Device</span> |{" "}
      </Link>
      <Link
        onClick={() => setPageNumber(8)}
        activeClass="active"
        to="section8"
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
      >
        <span className={styles.section}>Keyboard</span>
      </Link>
    </div>
  );
}

export default NavSection;

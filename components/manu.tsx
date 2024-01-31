import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./manu.module.css";
import Image from "next/image";
function Manu() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [page, setPage] = useState(0);
  const setPageNumber = (page_num: number) => {
    setPage(page_num);
  };

  console.log(page);

  return (
    <div className={styles.manu}>
      <div className={styles.logo}>
        <Image src="/logo.png" width="45" height="45" alt="" />
      </div>
      <div className={styles.navbar}>
        <Link
          className={styles.navItem}
          onClick={() => setPageNumber(1)}
          style={
            page == 1
              ? {
                  color: "#ffffff",
                  background: "#151515",
                  borderRight: "1px solid #ffe400",
                }
              : { color: "#b7b7b7" }
          }
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
        <Link
          className={styles.navItem}
          onClick={() => setPageNumber(2)}
          style={
            page == 2
              ? {
                  color: "#ffffff",
                  background: "#151515",
                  borderRight: "1px solid #ffe400",
                }
              : { color: "#b7b7b7" }
          }
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </Link>

        <Link
          className={styles.navItem}
          onClick={() => setPageNumber(3)}
          style={
            page == 3
              ? {
                  color: "#ffffff",
                  background: "#151515",
                  borderRight: "1px solid #ffe400",
                }
              : { color: "#b7b7b7" }
          }
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>

        <Link
          className={styles.navItem}
          onClick={() => setPageNumber(4)}
          style={
            page == 4
              ? {
                  color: "#ffffff",
                  background: "#151515",
                  borderRight: "1px solid #ffe400",
                }
              : { color: "#b7b7b7" }
          }
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Manu;

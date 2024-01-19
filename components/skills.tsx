import styles from "./skills.module.css";
import Header from "./header";
import BallCanvas from "./canvas/ball";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  docker,
} from "../assets";
import python from "../assets/tech/python.png";
import go from "../assets/tech/go.png";
import fusion from "../assets/tech/fusion.png";
import next from "../assets/tech/next.png";
import postgres from "../assets/tech/postgres.png";

function Skills() {
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Go Lang",
      icon: go,
    },
    {
      name: "Fusion 360",
      icon: fusion,
    },
    {
      name: "Next.js",
      icon: next,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <p className={styles.top_header}>
        A front-end and back-end developer, and a designer.
      </p>
      <p className={styles.header}>Some skills I have</p>
      <div className={styles.text_container}>
        <p className={styles.text}>
          My main focus is on website development - both the backend and the
          frontend.
        </p>
        <p className={styles.text}>
          I write Python or Go scripts for machine learning, web scraping, bot
          development, REST API, and automation purposes. I frequently work with
          HTML, CSS, JS, and develop websites with React, Next, or Vue.{" "}
        </p>
        <p className={styles.text}>
          View my{" "}
          <span>
            <a href="https://github.com/Avril-Cui" className={styles.github}>
              GitHub
            </a>
          </span>{" "}
          for more details.
        </p>
      </div>
      <div className={styles.center}>
        <div className={styles.skills}>
          {technologies.map((technology) => (
            <div className={styles.ball} key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

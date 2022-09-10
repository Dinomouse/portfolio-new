import { motion } from "framer-motion";
import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faNodeJs,
  faReact,
  faMicrosoft,
  faPython,
  faAws,
  faHtml5,
  faCss3,
  faGolang,
  faFigma,
  faGit,
  faGithub,
  faGitAlt,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faE, faX } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.card}>
        <h1 className={styles.h1}>About Me</h1>

        <p className={styles.paragraph}>
          Hi, my name is Arian. I am an aspiring software developer. I have a
          degree in mathematics from The University of Nottingham. I have had
          many roles in the past including an Intern @ Peanut, Banking Assistant
          @ Live Nation Music UK and most recently, a Business Analst @ Clear
          Box Retail.
          <br /> I recently graduated from the School of Code, a 4 month
          intensive web development bootcamp where I was immersed into front and
          back end technologies, through collaborative workshops and hackathons.
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.h1}>My Techstack</h1>

        <div className={styles.list}>
          <div className={styles.block}>
            <li className={styles.listItem}>
              HTML
              <FontAwesomeIcon id="js" icon={faHtml5} />
            </li>

            <li className={styles.listItem}>
              CSS <FontAwesomeIcon id="node" icon={faCss3} />
            </li>
          </div>
          <div className={styles.block}>
            <li className={styles.listItem}>
              JavaScript
              <FontAwesomeIcon id="js" icon={faJs} />
            </li>

            <li className={styles.listItem}>
              Node.js <FontAwesomeIcon id="node" icon={faNodeJs} />
            </li>
          </div>
          <div className={styles.block}>
            <li className={styles.listItem}>
              React.js
              <FontAwesomeIcon id="react" icon={faReact} />
            </li>
            <li className={styles.listItem}>
              Express.js
              <div id="ex">
                <FontAwesomeIcon id="e" icon={faE} />
              </div>
            </li>
          </div>
          <div className={styles.block}>
            <li className={styles.listItem}>
              Golang <FontAwesomeIcon id="python" icon={faGolang} />
            </li>
            <li className={styles.listItem}>
              Power BI
              <FontAwesomeIcon id="bi" icon={faMicrosoft} />
            </li>{" "}
          </div>
          <div className={styles.block}>
            <li className={styles.listItem}>
              SQL <FontAwesomeIcon id="db" icon={faDatabase} />
            </li>
            <li className={styles.listItem}>
              Figma
              <FontAwesomeIcon id="aws" icon={faFigma} />
            </li>
          </div>
          <div className={styles.block}>
            <li className={styles.listItem}>
              Github <FontAwesomeIcon id="db" icon={faGithubAlt} />
            </li>
            <li className={styles.listItem}>
              Git
              <FontAwesomeIcon id="aws" icon={faGitAlt} />
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

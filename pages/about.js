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
      <motion.div
        className={styles.card}
        initial={{ y: "1000px" }}
        animate={{ y: "0px" }}
        transition={{ type: "spring", duration: 2 }}
      >
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
      </motion.div>
      <motion.div
        className={styles.card}
        initial={{ x: "1000px" }}
        animate={{ x: "0px" }}
        transition={{ type: "spring", duration: 2 }}
      >
        <h1 className={styles.h1}>My Techstack</h1>

        <div className={styles.list}>
          <div className={styles.block}>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              HTML
              <FontAwesomeIcon id="js" icon={faHtml5} />
            </motion.li>

            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
            >
              CSS <FontAwesomeIcon id="node" icon={faCss3} />
            </motion.li>
          </div>
          <div className={styles.block}>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4 }}
            >
              JavaScript
              <FontAwesomeIcon id="js" icon={faJs} />
            </motion.li>

            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4.5 }}
            >
              Node.js <FontAwesomeIcon id="node" icon={faNodeJs} />
            </motion.li>
          </div>
          <div className={styles.block}>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
            >
              React.js
              <FontAwesomeIcon id="react" icon={faReact} />
            </motion.li>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5.5 }}
            >
              Express.js
              <div id="ex">
                <FontAwesomeIcon id="e" icon={faE} />
              </div>
            </motion.li>
          </div>
          <div className={styles.block}>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 6 }}
            >
              Golang <FontAwesomeIcon id="python" icon={faGolang} />
            </motion.li>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 6.5 }}
            >
              Power BI
              <FontAwesomeIcon id="bi" icon={faMicrosoft} />
            </motion.li>{" "}
          </div>
          <div className={styles.block}>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 7 }}
            >
              SQL <FontAwesomeIcon id="db" icon={faDatabase} />
            </motion.li>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 7.5 }}
            >
              Figma
              <FontAwesomeIcon id="aws" icon={faFigma} />
            </motion.li>
          </div>
          <div className={styles.block}>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 8 }}
            >
              Github <FontAwesomeIcon id="db" icon={faGithubAlt} />
            </motion.li>
            <motion.li
              className={styles.listItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 8.5 }}
            >
              Git
              <FontAwesomeIcon id="aws" icon={faGitAlt} />
            </motion.li>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

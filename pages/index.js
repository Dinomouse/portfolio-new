import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import VerticallyCenter from "../components/Modal";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ x: "-1000px" }}
          animate={{ x: "0px" }}
          transition={{ type: "spring", duration: 1.5 }}
        >
          Arian Moossavi <br />
          Software Developer
        </motion.h1>
        <motion.div
          className={styles.catContainer}
          initial={{ x: "1000px" }}
          animate={{ x: "0px" }}
          transition={{ duration: 1.1 }}
        >
          <Image src="/arian_main.svg" height={250} width={250} alt="arian" />
        </motion.div>
      </div>
      <VerticallyCenter />
    </>
  );
}

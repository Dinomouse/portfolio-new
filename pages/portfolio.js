import styles from "../styles/portfolio.module.css";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardBlock}>
          <div className={styles.card}>
            <h1 className={styles.title}>Finders Keepers</h1>
            <Image src="/finders-keeper.png" alt="arian" layout="fill" />
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>AmaZoo</h1>
            <Image src="/Amazoo.png" alt="arian" layout="fill" />
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>One Step Ahead</h1>
            <Image src="/onestep.png" alt="arian" layout="fill" />
          </div>
        </div>

        <div className={styles.cardBlock}>
          <div className={styles.card}>
            <h1 className={styles.title}>Booking</h1>
            <Image src="/booking.png" alt="arian" layout="fill" />
          </div>
          <div className={styles.card}>SoC Dashboard</div>
          <div className={styles.card}>REST API w/ CRUD</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

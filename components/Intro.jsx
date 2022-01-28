import React from "react";
import styles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {" "}
          <span className={styles.brand}>AVOCAD0</span> DIGITAL PRODUCT AGENCY
        </h1>

        <p className={styles.description}>
          {" "}
          Create live segments and target the right people for messsages based
          on their behaviours
        </p>
      </div>
      <div className={styles.card}>Second</div>
    </div>
  );
};

export default Intro;

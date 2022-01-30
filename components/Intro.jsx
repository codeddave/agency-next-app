import Image from "next/image";
import React from "react";
import styles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blend}></div>
      <div className={styles.hero}>
        <Image
          src="/img/agency-six.jpg"
          layout="fill"
          objectFit="cover"
          height="100%"
          width="100%"
          alt=""
        />
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>
          {" "}
          <span className={styles.brand}>PRODEV</span> DIGITAL PRODUCT AGENCY
        </h1>

        <p className={styles.description}>
          {" "}
          Create live segments and target the right people for messsages based
          on their behaviours
        </p>

        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}></div>
    </div>
  );
};

export default Intro;

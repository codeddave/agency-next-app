import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.logo}>PRODEV</p>
        <div className={styles.second}>
          <div>
            <p>WORK WITH US</p>
            <p className={styles.block}>&copy; 2022 Prodev Interactive</p>
          </div>

          <div className={styles.card}>
            <p>12 Adam Street, USA</p>
            <p>212 444 516</p>

            <p>contact@lama.dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

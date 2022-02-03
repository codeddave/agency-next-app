import Link from "next/link";
import styles from "../styles/Navbar.module.css";

import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/">PRODEV</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design"> DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production"> PRODUCTION</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography"> PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact  "> CONTACT</Link>
        </li>
      </ul>
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />

        {isOpen ? (
          <ul className={styles.menu}>
            <li className={styles.menuItem} onClick={() => setOpen(false)}>
              <Link href="/products/design"> DESIGN</Link>
            </li>
            <li className={styles.menuItem} onClick={() => setOpen(false)}>
              <Link href="/products/development">DEVELOPMENT</Link>
            </li>
            <li className={styles.menuItem} onClick={() => setOpen(false)}>
              <Link href="/products/production"> PRODUCTION</Link>
            </li>
            <li className={styles.menuItem} onClick={() => setOpen(false)}>
              <Link href="/products/photography"> PHOTOGRAPHY</Link>
            </li>
            <li className={styles.menuItem} onClick={() => setOpen(false)}>
              <Link href="/products/contact  "> CONTACT</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;

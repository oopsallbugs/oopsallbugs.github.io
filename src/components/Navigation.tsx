import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.topLeft}>
      <header className={styles.header}>
        <h1 className={styles.name}>Sam Humphries</h1>
        <h2 className={styles.title}>Software Developer</h2>
      </header>

      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/resume" className={styles.navLink}>
              Resume
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

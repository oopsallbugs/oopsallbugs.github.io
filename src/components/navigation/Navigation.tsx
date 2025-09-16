import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>Sam Humphries</h1>
        <h2 className={styles.title}>Software Developer</h2>
      </header>

      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              Projects
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              Resume
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

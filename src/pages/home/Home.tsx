import styles from "./Home.module.css";
import BlackholeAnimation from "../../components/BlackholeAnimation";

function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.blackholeContainer}>
        {/* Interactive blackhole animation with cursor gravity */}
        <BlackholeAnimation />

        {/* Top Left: Header + Navigation */}
        <div className={styles.topLeft}>
          <header className={styles.header}>
            <h1 className={styles.name}>Sam Humphries</h1>
            <h2 className={styles.title}>Software Developer</h2>
          </header>

          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#home" className={styles.navLink}>
                  Home
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#projects" className={styles.navLink}>
                  Projects
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#resume" className={styles.navLink}>
                  Resume
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#contact" className={styles.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Right: Intro */}
        <div className={styles.bottomRight}>
          <section className={styles.introSection}>
            <p className={styles.introText}>
              Passionate about creating elegant solutions to complex problems.
              Currently seeking opportunities to contribute to innovative
              projects and grow as a developer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;

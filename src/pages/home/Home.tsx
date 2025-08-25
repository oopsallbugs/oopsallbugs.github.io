import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.pageContent}>
        <div className={styles.header}>
          <h1>Sam Humphries</h1>
          <h2>Software Developer</h2>
        </div>

        <div className={styles.navContainer}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Resume</li>
              <li>Contact</li>
              <li>Projects</li>
            </ul>
          </nav>
        </div>

        <div className={styles.mainContent}>MAIN FOCUS OF PAGE</div>

        <div className={styles.textContent}>
          <p>
            Welcome to my personal website! I am a software developer with a
            passion for creating innovative solutions. Explore my projects and
            feel free to reach out!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

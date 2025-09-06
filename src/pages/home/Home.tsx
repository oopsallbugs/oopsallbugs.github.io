import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.content}>
      <section className={styles.introSection}>
        <p className={styles.introText}>
          Passionate about creating elegant solutions <br />
          to complex problems. <br />
          Currently seeking opportunities to contribute, <br />
          innovative projects and grow as a developer.
        </p>
      </section>
    </div>
  );
};

export default Home;

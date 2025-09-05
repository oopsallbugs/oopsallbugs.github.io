import styles from "./Home.module.css";
import BlackHoleCanvas from "../../components/blackhole/BlackHoleCanvas";
import { useOutletContext } from "react-router-dom";

interface OutletContext {
  enableCamera: boolean;
  enableControls: boolean;
  enableSkyBox: boolean;
  setEnableCamera: (value: boolean) => void;
  setEnableControls: (value: boolean) => void;
  setEnableSkyBox: (value: boolean) => void;
}

const Home = () => {
  const { enableCamera, enableControls, enableSkyBox } =
    useOutletContext<OutletContext>();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentContainer}>
        <BlackHoleCanvas
          controls={enableControls}
          camera={enableCamera}
          skyBox={enableSkyBox}
        />
        {/* Top Left: Header + Navigation */}
        {!enableControls && (
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
        )}

        {/* Bottom Right: Intro */}
        {!enableControls && (
          <div className={styles.bottomRight}>
            <section className={styles.introSection}>
              <p className={styles.introText}>
                Passionate about creating elegant solutions to complex problems.
                Currently seeking opportunities to contribute to innovative
                projects and grow as a developer.
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

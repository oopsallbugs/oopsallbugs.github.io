import styles from "./Home.module.css";
import BlackHoleCanvas from "../../components/blackhole/BlackHoleCanvas";
import Navigation from "../../components/Navigation";
import { useOutletContext } from "react-router-dom";

interface HomeOutletContext {
  enableCamera: boolean;
  enableControls: boolean;
  enableSkyBox: boolean;
}

const Home = () => {
  const { enableCamera, enableControls, enableSkyBox } =
    useOutletContext<HomeOutletContext>();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentContainer}>
        <BlackHoleCanvas
          controls={enableControls}
          camera={enableCamera}
          skyBox={enableSkyBox}
        />
        {/* Title + Navigation Defaults (absolute top left) */}
        {!enableControls && <Navigation />}

        {/* Bottom Right: Intro */}
        {!enableControls && (
          <div className={styles.bottomRight}>
            <section className={styles.introSection}>
              <p className={styles.introText}>
                Passionate about creating elegant solutions to complex problems.
                Currently seeking opportunities to contribute, innovative
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

import Navigation from "../../components/navigation/Navigation";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.navLocation}>
        <Navigation />
      </div>
      <div className={styles.content}>
        <h1>Projects</h1>
        <p>Coming Soon!</p>
      </div>
    </div>
  );
};

export default Projects;

import Navigation from "../../components/Navigation";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentContainer}>
        <Navigation />
        <div className={styles.content}>
          <h1>Projects</h1>
          <p>Coming Soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

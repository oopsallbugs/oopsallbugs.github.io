import Navigation from "../../components/Navigation";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentContainer}>
        <Navigation />
        <div className={styles.content}>
          <h1>Contact</h1>
          <p>Coming Soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

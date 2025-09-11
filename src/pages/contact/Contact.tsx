import styles from "./Contact.module.css";
import ArrowUpRight from "../../components/icons/ArrowUpRight";
import GitHub from "../../components/icons/GitHub";
import LinkedIn from "../../components/icons/LinkedIn";
import Envelope from "../../components/icons/Envelope";

const Contact = () => {
  return (
    <div className={styles.content}>
      <ul className={styles.linkList}>
        <li>
          <a
            href="https://github.com/oopsallbugs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.linkIconLeft}>
              <GitHub />
            </span>
            <span className={styles.linkText}>GitHub</span>
            <span className={styles.linkIconRight}>
              <ArrowUpRight />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sam-humphries-972318294"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.linkIconLeft}>
              <LinkedIn />
            </span>
            <span className={styles.linkText}>LinkedIn</span>
            <span className={styles.linkIconRight}>
              <ArrowUpRight />
            </span>
          </a>
        </li>
        <li>
          <a href="mailto:samuel.c.humphries@gmail.com" className={styles.link}>
            <span className={styles.linkIconLeft}>
              <Envelope />
            </span>
            <span className={styles.linkText}>Email</span>
            <span className={styles.linkIconRight}>
              <ArrowUpRight />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

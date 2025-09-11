import styles from "./Contact.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
              <FaGithub />
            </span>
            <span className={styles.linkText}>GitHub</span>
            <span className={styles.linkIconRight}>
              <LuArrowUpRight />
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
              <FaLinkedin />
            </span>
            <span className={styles.linkText}>LinkedIn</span>
            <span className={styles.linkIconRight}>
              <LuArrowUpRight />
            </span>
          </a>
        </li>
        <li>
          <a href="mailto:samuel.c.humphries@gmail.com" className={styles.link}>
            <span className={styles.linkIconLeft}>
              <FaEnvelope />
            </span>
            <span className={styles.linkText}>Email</span>
            <span className={styles.linkIconRight}>
              <LuArrowUpRight />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

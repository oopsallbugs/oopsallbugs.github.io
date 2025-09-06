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
            <FaGithub /> GitHub <LuArrowUpRight />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sam-humphries-972318294"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLinkedin /> LinkedIn <LuArrowUpRight />
          </a>
        </li>
        <li>
          <a href="mailto:samuel.c.humphries@gmail.com" className={styles.link}>
            <FaEnvelope /> Email <LuArrowUpRight />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

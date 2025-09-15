import Navigation from "../../components/Navigation";
import styles from "./Resume.module.css";
import { useState } from "react";
import {
  profileText,
  experienceItems,
  certificates,
  hobbies,
  projects,
  skillCategories,
  testimonials,
} from "./resumeData";

const Resume = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  return (
    <div className={styles.pageBackground}>
      <div className={styles.mainContent}>
        {/* Top section: Navigation and Profile */}
        <div className={styles.topSection}>
          <div className={styles.navSection}>
            <Navigation />
          </div>
          <div className={styles.section}>
            <div className={styles.profileSection}>
              <h2>Profile</h2>
              <div className={styles.profileWrapper}>
                <p className={styles.profileText}>
                  {profileText.split("\n\n").map((paragraph, index) => (
                    <span key={index}>
                      {paragraph}
                      {index < profileText.split("\n\n").length - 1 && (
                        <>
                          <br /> <br />
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle section: Experience/Education/Hobbies/Projects on left, Skills & Testimonials on right */}
        <div className={styles.middleSection}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.section}>
              <div className={styles.experienceSection}>
                <h2>Experience</h2>
                <ul className={styles.experienceList}>
                  {experienceItems.map((item, index) => (
                    <li key={index} className={styles.experienceItem}>
                      <div className={styles.experienceTitle}>{item.title}</div>
                      <div className={styles.experienceBody}>
                        {item.responsibilities.map((responsibility, i) => (
                          <span key={i}>
                            • {responsibility}
                            {i < item.responsibilities.length - 1 && (
                              <>
                                <br />
                              </>
                            )}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.educationSection}>
                <h2>Education</h2>
                <ul className={styles.educationList}>
                  {certificates.map((cert, i) => (
                    <li key={i} className={styles.certificateItem}>
                      <img
                        className={styles.certificateImage}
                        src={cert.imageUrl}
                        alt={cert.alt}
                        onClick={() => setSelectedCertificate(cert.imageUrl)}
                      />
                    </li>
                  ))}
                </ul>

                {selectedCertificate && (
                  <div
                    className={styles.overlay}
                    onClick={() => setSelectedCertificate(null)}
                  >
                    <img
                      src={selectedCertificate}
                      alt="Enlarged certificate"
                      className={styles.enlargedImage}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className={styles.section}>
              <h2>Testimonials</h2>
              <ul className={styles.testimonialList}>
                {testimonials.map((testimonial, index) => (
                  <li key={index} className={styles.testimonialItem}>
                    <div className={styles.testimonialQuote}>
                      {testimonial.quote}
                    </div>
                    <div className={styles.testimonialAuthor}>
                      - {testimonial.author}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.projectSection}>
                <h2>Projects</h2>
                <ul className={styles.projectList}>
                  {projects.map((project, index) => (
                    <li key={index} className={styles.projectItem}>
                      <div className={styles.projectTitle}>{project.title}</div>
                      <div className={styles.projectBody}>
                        {project.description.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < project.description.length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.section}>
              <div className={styles.skillsSection}>
                <h2>Skills</h2>
                <div className={styles.skillsGrid}>
                  {skillCategories.map((category, index) => (
                    <div key={index} className={styles.skillCategory}>
                      <h3>{category.title}</h3>
                      <ul>
                        {category.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.hobbiesSection}>
                <h2>Hobbies & interests</h2>
                <div className={styles.hobbiesList}>
                  {hobbies.map((hobby, index) => (
                    <span key={index} className={styles.hobbyTag}>
                      {hobby.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

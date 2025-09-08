import Navigation from "../../components/Navigation";
import styles from "./Resume.module.css";
import { useState } from "react";

const Resume = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const certificates = [
    "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/142579370",
    "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/142589881",
    "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/135413912",
    "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/134580032",
  ];

  return (
    <div className={styles.pageContentContainer}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <div className={styles.topSection}>
            <div className={styles.navSection}>
              <Navigation />
            </div>
            <div className={styles.section}>
              <div className={styles.profileSection}>
                <h2>Profile</h2>
                <p className={styles.profileText}>
                  Former electrician with 9 years of hands-on, customer-facing
                  experience, now bringing a practical, detail-oriented mindset
                  to software development. Rapid self-learner who quickly gained
                  practical experience with Python, FastAPI, and frontend
                  frameworks to deliver backend improvements and build
                  full-featured frontend pages during a fast-paced Agile
                  internship.
                  <br />
                  Skilled in full-stack development using JavaScript/TypeScript,
                  React, Node.js, and PostgreSQL, with a strong focus on clean
                  architecture principles. Experienced in designing secure APIs,
                  implementing token-based authentication, and eﬃciently
                  managing state on both client and server sides to ensure
                  smooth, responsive user experiences and reliable backend
                  operations.
                  <br />
                  Known for eﬀective collaboration in team environments,
                  embracing Agile methodologies, and writing maintainable,
                  testable code. Passionate about creating user-centric
                  applications that solve real-world problems and improve
                  workflow eﬃciency, supported by leadership and mentoring
                  experience in high-pressure technical roles.
                </p>
              </div>
            </div>
          </div>

          {/* Middle section: Experience/Education/Hobbies on left, Skills on right */}
          <div className={styles.middleSection}>
            <div className={styles.leftColumn}>
              <div className={styles.section}>
                <div className={styles.experienceSection}>
                  <h2>Experience</h2>
                  <ul className={styles.experienceList}>
                    <li className={styles.experienceItem}>
                      <div className={styles.experienceTitle}>
                        Software Development Intern - RevoTech - (Mar - May
                        2025)
                      </div>
                      <div className={styles.experienceBody}>
                        • Joined a small Agile-based team for a two-month
                        internship.
                        <br />
                        • Rapidly learned Python and FastAPI to contribute to
                        backend development.
                        <br />
                        • Refactored token management and caching systems,
                        resolving systematic login and sync issues by improving
                        access control, session handling, token storage and
                        security by enforcing separation of concerns and single
                        responsibility.
                        <br />
                        • Worked closely with other interns to integrate UI
                        toolkit components, increasing consistency across the
                        UI.
                        <br />
                        • Independently developed a frontend page for managing
                        users from an external system, owning the full
                        development lifecycle from implementation to testing.
                        <br />
                        • Frontend refactor to separate the single file
                        dashboard into separate components.
                        <br />
                        • Used Git and GitHub for collaboration, code reviews,
                        and version control.
                        <br />
                      </div>
                    </li>
                    <li className={styles.experienceItem}>
                      <div className={styles.experienceTitle}>
                        Full-Stack Projects - Mission Ready - (2024 - 2025)
                      </div>
                      <div className={styles.experienceBody}>
                        • Designed an AI assistant using Gemini API, React, and
                        Express. Built question workflows and used user feedback
                        to improve relevance.
                        <br />
                        • CLI Tool: Created a modular Node.js command-line app
                        with full CRUD logic for managing tasks. Focused on
                        clean architecture and reusable modules.
                        <br />
                        • Dynamic Web Apps: Developed React/Express apps with
                        user login, API routes, and persistent data
                        (PostgreSQL).
                        <br />
                        • Integrated basic role-based access control and
                        deployed to the cloud.
                        <br />• Gained real experience with Agile planning,
                        debugging, team-based Git workflows, and user testing.
                      </div>
                    </li>
                    <li className={styles.experienceItem}>
                      <div className={styles.experienceTitle}>
                        Registered Electrician - (2017 - 2023)
                      </div>
                      <div className={styles.experienceBody}>
                        • Independently diagnosed and repaired electrical faults
                        in residential, commercial, and industrial systems under
                        time pressure.
                        <br />
                        • Mentored apprentices, helping them build technical and
                        safety skills while supervising installations.
                        <br />
                        • Managed on-site builds of washing machine assembly
                        lines, coordinating trades and ensuring quality control.
                        <br />
                        • Led an international installation project overseas,
                        demonstrating leadership, communication, and
                        reliability.
                        <br />• Developed systems thinking by working with
                        interdependent components — now directly applied to
                        systems design in software.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.section}>
                <div className={styles.educationSection}>
                  <h2>Education</h2>
                  <ul className={styles.educationList}>
                    {certificates.map((src, i) => (
                      <li key={i} className={styles.certificateItem}>
                        <img
                          className={styles.certificateImage}
                          src={src}
                          alt={`Certificate ${i + 1}`}
                          onClick={() => setSelectedCertificate(src)}
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
                <div className={styles.hobbiesSection}>
                  <h2>Hobbies & interests</h2>
                  <div className={styles.hobbiesList}>
                    <span className={styles.hobbyTag}>
                      Coding & exploring new technologies
                    </span>
                    <span className={styles.hobbyTag}>Space & science</span>
                    <span className={styles.hobbyTag}>Gaming</span>
                    <span className={styles.hobbyTag}>Chess</span>
                    <span className={styles.hobbyTag}>Bonsai</span>
                    <span className={styles.hobbyTag}>Cats</span>
                    <span className={styles.hobbyTag}>Electronic Music</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.section}>
                <div className={styles.skillsSection}>
                  <h2>Skills</h2>
                  <div className={styles.skillsGrid}>
                    <div className={styles.skillCategory}>
                      <h3>Languages & Scripting</h3>
                      <ul>
                        <li>JavaScript, TypeScript, Python, HTML/CSS, SQL</li>
                        <li>
                          Used across frontend, backend, and scripting tasks.
                        </li>
                      </ul>
                    </div>

                    <div className={styles.skillCategory}>
                      <h3>Frontend Development</h3>
                      <ul>
                        <li>React (including custom hooks, context API)</li>
                        <li>React Native (Expo)</li>
                        <li>Responsive design and UI component libraries</li>
                        <li>
                          Comfortable translating wireframes into accessible,
                          functional interfaces.
                        </li>
                      </ul>
                    </div>

                    <div className={styles.skillCategory}>
                      <h3>Backend & APIs</h3>
                      <ul>
                        <li>Node.js, Express, FastAPI, REST API</li>
                        <li>RESTful API design and integration</li>
                        <li>Authentication & role-based access control</li>
                        <li>Token-based authentication (JWT)</li>
                        <li>Session handling & secure endpoints</li>
                      </ul>
                    </div>

                    <div className={styles.skillCategory}>
                      <h3>Database & Querying</h3>
                      <ul>
                        <li>MySQL, PostgreSQL</li>
                        <li>Schema design, relational data modeling</li>
                        <li>Kysely (typed SQL builder)</li>
                        <li>Database migrations</li>
                      </ul>
                    </div>

                    <div className={styles.skillCategory}>
                      <h3>Dev Tools & Workflows</h3>
                      <ul>
                        <li>
                          Git/GitHub - feature branching, pull requests,
                          resolving conflicts.
                        </li>
                        <li>
                          Docker - containerized app environments for
                          consistency and portability.
                        </li>
                        <li>
                          Postman/Bruno - API testing, authentication flows, and
                          endpoint debugging.
                        </li>
                        <li>
                          CLI tools - Bash, npm scripts, development workflow
                          automation.
                        </li>
                        <li>
                          Turborepo - monorepo setup and task orchestration for
                          full-stack projects.
                        </li>
                      </ul>
                    </div>

                    <div className={styles.skillCategory}>
                      <h3>Development Practices</h3>
                      <ul>
                        <li>Agile methodology</li>
                        <li>Debugging</li>
                        <li>Pair programming</li>
                        <li>Documentation writing</li>
                        <li>Code refactoring</li>
                        <li>Component-based architecture</li>
                        <li>State management</li>
                        <li>Clean code principles</li>
                        <li>Pull request reviews</li>
                        <li>Testing fundamentals</li>
                        <li>API integration and error handling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth row: Projects + Testimonials */}
          <div className={styles.bottomSection}>
            <div className={styles.section}>
              <div className={styles.projectSection}>
                <h2>Projects</h2>
                <ul className={styles.projectList}>
                  <li className={styles.projectItem}>
                    <div className={styles.projectTitle}>Portfolio Website</div>
                    <div className={styles.projectBody}>
                      A personal portfolio website featuring an interactive 3D
                      black hole visualization built with React, TypeScript,
                      React Three Fiber & WebGL. Includes real-time particle
                      systems, orbital controls, and automated GitHub Pages
                      deployment.
                    </div>
                  </li>
                  <li className={styles.projectItem}>
                    <div className={styles.projectTitle}>
                      Budgeting App (in progress)
                    </div>
                    <div className={styles.projectBody}>
                      • Tech stack: React Native, Expo, TypeScript, PostgreSQL,
                      Kysely, TanStack Query, Turborepo.
                      <br />
                      • Designed and bootstrapped a budgeting app in a scalable
                      monorepo using Turborepo and Expo.
                      <br />
                      • Implemented typed queries with Kysely and PostgreSQL for
                      structured, maintainable backend logic.
                      <br />
                      • Used TanStack Query for eﬃcient client-side state and
                      caching.
                      <br />
                      • Focused on clean architecture, oﬄine-first potential,
                      and mobile responsiveness.
                      <br />• Demonstrates strong understanding of project
                      structure, mobile-first development, and toolchain setup.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Testimonials</h2>
              <ul className={styles.testimonialList}>
                <li className={styles.testimonialItem}>
                  <div className={styles.testimonialQuote}>
                    "[Sam has] exemplary technical skills, ability to learn and
                    adaptability. [Sam] has been a very adaptable developer
                    since the beginning. He has always been able to get things
                    working even outside of his expertise [...]"
                  </div>
                  <div className={styles.testimonialAuthor}>
                    - Rawinder Singh, RevoTech
                  </div>
                </li>
                <li className={styles.testimonialItem}>
                  <div className={styles.testimonialQuote}>
                    "[Sam] has a deep curiosity and passion for software
                    development. His thoughtful contributions to discussions,
                    and the quality of his project work, clearly demonstrate his
                    abilities as a developer, and his desire to learn and grow
                    [...]"
                  </div>
                  <div className={styles.testimonialAuthor}>
                    - Cameron McEwing, Mission Ready
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

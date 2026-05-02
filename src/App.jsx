import "./style.css"

import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaReact, FaJava, FaAws } from "react-icons/fa"
import { SiJavascript, SiDocker } from "react-icons/si"

import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"

import ParticlesBackground from "./ParticlesBackground"

function App() {
  return (
    <div>

      <ParticlesBackground />

      {/* NAVBAR */}
      <div className="navbar">
        <h2>Brindha Chinnasamy</h2>

        <div>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="container">

        {/* HERO */}
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/brindha-portfolio/profile.png"
            className="profile-pic"
            alt="profile"
          />

          <h1>Brindha Chinnasamy</h1>

          <h2>
            <ReactTyped
              strings={[
                "Full Stack Developer (React.js | Node.js | Python)",
                "Backend Engineer (FastAPI | Node.js)",
                "Building Scalable & High-Performance Systems"
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h2>

          <p>
            4.7+ years of experience building scalable, high-performance web applications using React.js, Node.js, and Python.
            Specialized in REST APIs, microservices, and cloud-native development on AWS.
          </p>

          <div className="buttons">
            <a href="#projects">View Projects</a>
            <a href="/brindha-portfolio/resume_v2.pdf" download>
              Download Resume
            </a>
          </div>

          <p style={{ marginTop: "10px" }}>
            🚀 Specialized in Full Stack Development | Cloud | Scalable Systems
          </p>
        </motion.div>

        {/* SKILLS */}
        <div className="section" id="skills">
          <h2>Skills</h2>

          <div className="skills">

            <div className="skill-card"><FaPython /><p>Python</p></div>
            <div className="skill-card"><FaJava /><p>Java</p></div>
            <div className="skill-card"><FaReact /><p>React</p></div>
            <div className="skill-card"><SiJavascript /><p>JavaScript</p></div>
            <div className="skill-card"><p>TypeScript</p></div>
            <div className="skill-card"><p>Node.js</p></div>

            <div className="skill-card"><FaAws /><p>AWS</p></div>
            <div className="skill-card"><SiDocker /><p>Docker</p></div>
            <div className="skill-card"><p>Kubernetes</p></div>

            <div className="skill-card"><p>Django</p></div>
            <div className="skill-card"><p>FastAPI</p></div>
            <div className="skill-card"><p>REST APIs</p></div>
            <div className="skill-card"><p>Microservices</p></div>

            <div className="skill-card"><p>Oracle SQL</p></div>
            <div className="skill-card"><p>MySQL</p></div>
            <div className="skill-card"><p>Redis</p></div>

            <div className="skill-card"><p>PyTest</p></div>
            <div className="skill-card"><p>Jest</p></div>
            <div className="skill-card"><p>Mocha</p></div>

            <div className="skill-card"><p>Git</p></div>
            <div className="skill-card"><p>CI/CD</p></div>
            <div className="skill-card"><p>Postman</p></div>
            <div className="skill-card"><p>Swagger</p></div>

            <div className="skill-card"><p>HTML & CSS</p></div>

          </div>
        </div>

        {/* PROJECTS */}
        <div className="section" id="projects">
          <h2>Projects</h2>

          <div className="projects">

            <div className="project-card">
              <h3>Vehicle Performance Analyzer</h3>
              <p>React.js | Node.js | FastAPI | Oracle SQL | Docker</p>

              <ul>
                <li>Designed and developed scalable RESTful APIs using FastAPI and Node.js for real-time vehicle performance calculations.</li>
                <li>Implemented complex mathematical models including RPM calculation, torque interpolation, and maximal mass computation.</li>
                <li>Built dynamic and responsive frontend using React.js for real-time user input and visualization.</li>
                <li>Optimized Oracle SQL queries, improving performance by ~30% and reducing response time.</li>
                <li>Handled concurrent requests and ensured high availability for performance-critical workflows.</li>
                <li>Implemented secure coding practices and resolved vulnerabilities such as SQL Injection and XSS.</li>
                <li>Containerized the application using Docker for consistent deployment.</li>
                <li>Wrote unit tests using PyTest to improve code reliability and validation.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Compliance Risk Scoring System</h3>
              <p>React.js | Node.js | Django | AWS | MySQL</p>

              <ul>
                <li>Developed backend services using Django and Node.js for scalable risk scoring workflows.</li>
                <li>Designed RESTful APIs for real-time risk evaluation and decision-making.</li>
                <li>Implemented rule-based and weighted scoring algorithms for accurate classification.</li>
                <li>Built responsive frontend using React.js for improved user experience.</li>
                <li>Processed large datasets ensuring scalability and system performance.</li>
                <li>Designed optimized database schemas and improved query performance using MySQL.</li>
                <li>Deployed applications on AWS ensuring high availability and security.</li>
                <li>Implemented unit testing using PyTest for API validation and reliability.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="section" id="experience">
          <h2>Experience</h2>

          <div className="timeline">

            <div className="timeline-item">
              <h3>Software Engineer Consultant</h3>
              <p><strong>UD Trucks India (TEKsystems)</strong></p>
              <span>Oct 2023 – Present</span>

              <ul>
                <li>Developed scalable backend services using Python (FastAPI, Django) and Node.js.</li>
                <li>Built and integrated RESTful APIs for real-time data processing.</li>
                <li>Developed responsive UI using React.js and JavaScript.</li>
                <li>Designed low-latency and high-availability systems.</li>
                <li>Optimized SQL queries improving performance significantly.</li>
                <li>Implemented secure coding practices and fixed vulnerabilities (SQL Injection, XSS).</li>
                <li>Wrote unit tests using PyTest and Jest.</li>
                <li>Deployed applications using Docker, Kubernetes, and AWS.</li>
                <li>Worked on CI/CD pipelines and Agile development.</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h3>Associate Software Engineer</h3>
              <p><strong>First Advantage</strong></p>
              <span>Apr 2021 – Jul 2023</span>

              <ul>
                <li>Developed backend systems using Python (Django), Java, and .NET.</li>
                <li>Designed REST APIs for workflow automation and integrations.</li>
                <li>Built frontend applications using JavaScript, jQuery, and AJAX.</li>
                <li>Optimized database queries using Oracle and MySQL.</li>
                <li>Integrated third-party APIs and improved system performance.</li>
                <li>Handled production issues and ensured system reliability.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* CONTACT */}
        <div className="contact" id="contact">

          <h2>Let's Connect</h2>
          <p>Open to opportunities and collaborations.</p>

          <div className="contact-links">
            <a href="mailto:brindhachinasamy99@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/brindha-chinnasamy-64b607256/">LinkedIn</a>
            <a href="https://github.com/BrindhaC1408">GitHub</a>
          </div>

          <div className="footer-icons">
            <a href="mailto:brindhachinasamy99@gmail.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/brindha-chinnasamy-64b607256/"><FaLinkedin /></a>
            <a href="https://github.com/BrindhaC1408"><FaGithub /></a>
          </div>

          <p className="footer">© 2026 Brindha Chinnasamy</p>

        </div>

      </div>
    </div>
  )
}

export default App

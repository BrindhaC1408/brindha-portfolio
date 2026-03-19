import "./style.css"

import {FaGithub,FaLinkedin,FaEnvelope,FaPython,FaReact,FaJava,FaAws} from "react-icons/fa"
import {SiDotnet,SiJavascript,SiDocker} from "react-icons/si"

import {motion} from "framer-motion"
import { ReactTyped } from "react-typed"

import ParticlesBackground from "./ParticlesBackground"

function App(){

return(

<div>

<ParticlesBackground/>

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

<motion.div className="hero"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<img src={`${import.meta.env.BASE_URL}profile.png`} className="profile-pic"/>

<h1>Brindha Chinnasamy</h1>

<h2>
<ReactTyped
strings={[
"Full Stack Developer",
"Python Developer",
".NET Developer"
]}
typeSpeed={60}
backSpeed={40}
loop
/>
</h2>

<p>
4+ years building scalable enterprise applications using Python,
C#, .NET, Java and React.
</p>

<div className="buttons">
<a href="#projects">View Projects</a>
<a href={`${import.meta.env.BASE_URL}resume.pdf`} download>Download Resume</a>
</div>

</motion.div>

{/* SKILLS */}
<div className="section" id="skills">
<h2>Skills</h2>

<div className="skills">

<div className="skill-card"><FaPython/><p>Python</p></div>
<div className="skill-card"><SiDotnet/><p>C# / .NET</p></div>
<div className="skill-card"><FaJava/><p>Java</p></div>
<div className="skill-card"><FaReact/><p>React</p></div>
<div className="skill-card"><SiJavascript/><p>JavaScript</p></div>
<div className="skill-card"><FaAws/><p>AWS</p></div>
<div className="skill-card"><SiDocker/><p>Docker</p></div>

<div className="skill-card"><p>Spring Boot</p></div>
<div className="skill-card"><p>Django</p></div>
<div className="skill-card"><p>FastAPI</p></div>
<div className="skill-card"><p>REST APIs</p></div>
<div className="skill-card"><p>Microservices</p></div>
<div className="skill-card"><p>Oracle SQL</p></div>
<div className="skill-card"><p>MySQL</p></div>
<div className="skill-card"><p>NoSQL</p></div>
<div className="skill-card"><p>Git</p></div>
<div className="skill-card"><p>CI/CD</p></div>
<div className="skill-card"><p>Kubernetes</p></div>
<div className="skill-card"><p>HTML & CSS</p></div>
<div className="skill-card"><p>Bootstrap</p></div>
<div className="skill-card"><p>jQuery</p></div>

</div>
</div>

{/* PROJECTS */}
<div className="section" id="projects">
<h2>Projects</h2>

<div className="projects">

<div className="project-card">
<h3>Vehicle Performance Analyzer</h3>
<p>Python | FastAPI | Oracle</p>
</div>

<div className="project-card">
<h3>Task Management API</h3>
<p>C# | ASP.NET Core</p>
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
<li>Developing enterprise vehicle performance applications using Python, JavaScript, and Oracle SQL.</li>
<li>Implemented RPM calculation and maximal mass computation.</li>
<li>Fixed SQL Injection and XSS vulnerabilities.</li>
<li>Optimized database performance and queries.</li>
<li>Worked on RHEL upgrades and production stability.</li>
</ul>

</div>

<div className="timeline-item">
<h3>Associate Software Engineer</h3>
<p><strong>First Advantage</strong></p>
<span>Apr 2021 – Jul 2023</span>

<ul>
<li>Developed REST APIs using Java, Python and .NET.</li>
<li>Improved UI using JavaScript, jQuery, AJAX.</li>
<li>Integrated third-party APIs.</li>
<li>Worked in Agile environment and handled production issues.</li>
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
<a href="https://linkedin.com">LinkedIn</a>
<a href="https://github.com">GitHub</a>
</div>

<div className="footer-icons">
<a href="#"><FaEnvelope/></a>
<a href="#"><FaLinkedin/></a>
<a href="#"><FaGithub/></a>
</div>

<p className="footer">© 2026 Brindha Chinnasamy</p>

</div>

</div>
</div>

)

}

export default App


import { useEffect } from "react";
import './App.css'
import headshot from './assets/headshot.jpeg'
import mainLine from './assets/mAInLine.png'
import zenith from './assets/Zenith (2).png'
import twoMB from './assets/TwoMeatballs.jpg'
import CN from './assets/CodeNinjas.jpg'




function App() {

  useEffect(() => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
    <header className="header">
  <div className="header-left">
    William Newhouse Jr. | Software Developer
  </div>

  <div className="header-right">
    <button
      className="headerButtons"
      onClick={() => scrollToSection("About")}
    >
      About
    </button>

    <button
      className="headerButtons"
      onClick={() => scrollToSection("work")}
    >
      Work
    </button>

    <button
      className="headerButtons"
      onClick={() => scrollToSection("resume")}
    >
      Resume
    </button>

    <button
      className="headerButtons"
      onClick={() =>
        window.open("https://www.linkedin.com/in/wnewcasa/", "_blank")
      }
    >
      LinkedIn
    </button>

    <button
      className="headerButtons"
      onClick={() => window.open("https://github.com/wnewcasa")}
    >
      Github
    </button>
  </div>
</header>


    <section id="intro" className="fade-section">
      <div className="intro-text">
        <h1>Hello, I'm <span id="highlight"> Will</span></h1>
        <p>I am Computer Science Student at the University of Central Florida with a passion for both software and web development. This website serves as my online portfolio, aswell as a representation of me, feel free to look around!</p>
      </div>
      <img className="headshot" src={headshot} alt="Headshot" />
    </section>


    <section id="About" className="fade-section">
      <h1 className="orangeHeaders"> About </h1>
      
      <div className="about-text">
        
        <p> Hi, I’m William Newhouse Jr, or Will for short, I am a Computer Science student at UCF with a passion for software engineering, AI, and innovative technology. With hands-on experience in full-stack development, Java development, and acting as the leader in many fullstack projects, I enjoy building meaningful solutions and tackling challenging problems both by myself and with a team. Outside of development I spend a majority of my time with friends and family, along with taking care of my two cats. </p>
      
      </div>
      
    </section>

    <section id="work" className="fade-section">
      <div className="work-container">

        <h1 className="orangeHeaders">Past Projects</h1>

        <div className="projects-grid">


          {/* Portfolio */}
          <div className="project-card">
            <img
              className="project-image"
              src={headshot}
              alt="Portfolio Image"
            />

            <div className="project-info">
              <h2 className="orangeHeaders2">Portfolio Website</h2>
              <h3>Feburary 2026</h3>
              <h3></h3>
              <p>
                Designed and developed a fully responsive personal portfolio website to showcase projects, technical skills, and professional experience. Built using React and modern CSS with smooth scrolling, dynamic UI components, and PDF resume integration. Focused on clean design, and user experience.
              </p>

            
            </div>
          </div>

          {/* Zenith */}
          <div className="project-card">
            <img
              className="project-image"
              src={zenith}
              alt="Zenith Logo"
            />

            <div className="project-info">
              <h2 className="orangeHeaders2">Zenith</h2>
              <h3>November 2025</h3>
              <h3>Project Manager - Frontend Developer - UI/UX Designer</h3>
              <p>
                Zenith is a dynamic workout tracker designed to help users keep track
                of workouts and progress towards goals. Built as a class project
                between me and 3 other team members and implemented as both a
                mobile and web app.
              </p>

              <a
                href="https://github.com/wnewcasa/ZenithFit"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Mainline */}
          <div className="project-card">
            <img
              className="project-image"
              src={mainLine}
              alt="Mainline AI Logo"
            />

            <div className="project-info">
              <h2 className="orangeHeaders2">mAInLine</h2>
              <h3>June 2025</h3>
              <h3>API Developer</h3>
              <p>
                mAInLine was built during a 12-hour hackathon and acts as the user's
                personal AI-powered panic button. A life-saving AI emergency
                assistant designed to help users contact and relay critical
                information to 911 even while having emergencies that may limit speech.
              </p>

              <a
                href="https://github.com/alexdreyesz/main-line"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Project
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="workExperience" className="fade-section">
      <div className="workExperience-container">

        <h1 className="orangeHeaders" id="workTitle">Work Experience</h1>

        {/* Two Meatballs */}
        <div className="job-card">
          <img src={twoMB} alt="TwoMeatballs" className="job-image" />

          <div className="job-info">
            <h2>Managerial Busser</h2>
            <h3>Two Meatballs in The Kitchen • Cape Coral, Florida • July 2021–Present</h3>
            <p>
              •	Coordinated between front-of-house and back-of-house staff to ensure seamless service, while maintaining a welcoming environment and implementing efficiency-focused practices.
            </p>
            <p>
              •	Demonstrated strong leadership, adaptability, and efficient use of limited resources and staff.
            </p>
            <p>
              •	Assisted in scheduling, training and break times for various roles within the restaurant.
            </p>
          </div>
        </div>

        {/* Job 2 */}
        <div className="job-card">
          <img src={CN} alt="CodeNinjas" className="job-image" />

          <div className="job-info">
            <h2>Code Sensei</h2>
            <h3>Code Ninjas • Orlando, Florida • April 2025–Present</h3>
            <p>
              •	Help kids ages 7–14 learn computer programming through game development in a fun, engaging, and supportive environment. 
              •	Guide students through a tailored curriculum where they learn how to utilize the following programming languages: MakeCode, JavaScript, C#.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section id="resume" className="fade-section">
      <div className="resume-container">
        <h1 className="orangeHeaders">Resume</h1>

        <div className="resume-viewer">
          <iframe
            src="/Resume.pdf"
            title="William Newhouse Resume"
            className="resume-iframe"
          />
        </div>
      </div>
    </section>

      
    </>
  )

  
}

export default App

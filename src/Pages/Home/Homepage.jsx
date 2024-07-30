import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdWork, MdSchool, MdCode } from "react-icons/md";

const Homepage = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jfif" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">
            <MdWork className="section-icon" /> About
          </p>
          <p className="hero--section-description">
          Développeur web passionné avec plus de 1 ans d'expérience dans la création de sites dynamiques et d'expériences utilisateur.
          </p>
          <p className="section--title">
            <MdCode className="section-icon" /> Skills
          </p>
          <p className="hero--section-description">
            HTML5, CSS3, JavaScript, React.js, Angular, Vue.js, Bootstrap, Node.js, Express.js, MySQL, PostgreSQL, MongoDB, Git.
          </p>
          <p className="section--title">
            <MdSchool className="section-icon" /> Education
          </p>
          <p className="hero--section-description">
            DEC en Programmation Informatique du Collège La Cité.
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer--links">
          <a href="https://github.com/rayanissad06" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/rayan-issad-b290452b3/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" /> LinkedIn
          </a>
        </div>
        <p className="footer--text">© 2024</p>
      </footer>
    </section>
  );
}

export default Homepage;

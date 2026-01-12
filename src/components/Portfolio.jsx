import React, { useEffect, useState } from "react";
import "../styles/Portfolio.css";
import AboutMe from "./AboutMe.jsx";
import Resume from "./Resume.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import RoleAnimation from "./RoleAnimation.jsx";
export default function Portfolio() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="portfolio-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Muhammad Wisal</div>

        <ul className="nav-links">
          <li>
            <a href="#home" className={active === "home" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={active === "about" ? "active" : ""}>
              About
            </a>
          </li>
          <li>
            <a href="#resume" className={active === "resume" ? "active" : ""}>
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className={active === "projects" ? "active" : ""}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={active === "contact" ? "active" : ""}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HOME */}
      <section id="home" className="hero">
        <div className="hero-grid">

          <div className="hero-left">
            <p className="intro">HELLO!</p>
            <h1 className="name">
              I'm <span>Muhammad Wisal</span>
            </h1>
            <RoleAnimation />

            <p className="description">
              I build full-stack web applications using MongoDB, Express,
              React, and Node.js with performance & security in mind.
            </p>

            <div className="buttons">
              <a href="https://github.com/WisalMomand" className="btn-primary">
                GITHUB
              </a>
              <a href="https://www.linkedin.com/in/muhammad-wisal-48792536b/" className="btn-secondary">
                LINKEDIN
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="circle-border">
              <div className="circle-inner">
                <img
                  src="/My Profile.jpg"
                  alt="Muhammad Wisal"
                  className="profile-image"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

     
      <section id="about">
        <AboutMe />
      </section>

     
      <section id="resume" className="section-placeholder">
        <Resume />
      </section>

     
      <section id="projects" className="section-placeholder">
        <Project />
      </section>

     
      <section id="contact" className="section-placeholder">
        <Contact />
      </section>

    </div>
  );
}

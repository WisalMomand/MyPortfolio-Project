import React from "react";
import "../styles/About.css";

export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-4">
            <div className="profile-card">

              <div className="profile-image-container">
                <img
                  src="/My Profile.jpg"
                  alt="Muhammad Wisal"
                  className="profile-img"
                />
              </div>

              <div className="info-item">
                <span className="info-label">Name:</span> Muhammad Wisal
              </div>
              <div className="info-item">
                <span className="info-label">Job Role:</span> MERN Stack Developer
              </div>
              <div className="info-item">
                <span className="info-label">Experience:</span> 1+ Year
              </div>
              <div className="info-item">
                <span className="info-label">Address:</span> Lahore, Pakistan
              </div>

              {/* SKILLS */}
              <div className="skills-section">
                <h3 className="skills-title">Core Skills</h3>

                {[
                  ["MongoDB & Mongoose", "85%"],
                  ["Express.js & REST APIs", "90%"],
                  ["React.js & Hooks", "88%"],
                  ["Node.js", "85%"],
                  ["JavaScript (ES6+)", "90%"],
                ].map(([skill, percent]) => (
                  <div className="skill-item" key={skill}>
                    <div className="skill-name">
                      {skill} {percent}
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar"
                        style={{ width: percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-8">
            <div className="about-content">
              <h2 className="about-title">
                <span className="title-background">About</span>
                About Me
              </h2>

              <p className="about-description">
                MERN Stack Developer with hands-on experience in building
                full-stack web applications using MongoDB, Express.js, React.js,
                and Node.js. Experienced in developing scalable RESTful APIs,
                creating responsive user interfaces, and integrating frontend
                and backend systems. Strong focus on clean code, performance,
                and secure application architecture.
              </p>

              <div className="detail-row">
                <span className="detail-label">Profile:</span>
                <span className="detail-value">
                  Full-Stack MERN Developer
                </span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Tech Stack:</span>
                <span className="detail-value">
                  MongoDB, Express.js, React.js, Node.js
                </span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Backend Skills:</span>
                <span className="detail-value">
                  REST APIs, JWT Authentication, Passport.js, MVC Architecture
                </span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Frontend Skills:</span>
                <span className="detail-value">
                  React Hooks, Component Design, Tailwind CSS, Responsive UI
                </span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Tools & Platforms:</span>
                <span className="detail-value">
                  Git, GitHub, Postman, Firebase, VS Code, MongoDB Atlas
                </span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Education:</span>
                <span className="detail-value">
                  Bachelor in Computer Science
                </span>
              </div>

              <div className="projects-counter">
                <span className="counter-number">10+</span>
                <span>Projects Completed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

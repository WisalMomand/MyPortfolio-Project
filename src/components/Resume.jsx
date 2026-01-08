import React from 'react';
import '../styles/Resume.css';

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <div className="resume-header">
          <h2 className="resume-title">Resume</h2>
          <div className="resume-background-text">Resume</div>
        </div>
        
        <p className="resume-description">
         MERN Stack Developer with hands-on experience in building scalable,
          high-performance full-stack web applications using MongoDB, Express.js,
           React.js, and Node.js. Strong expertise in designing and consuming RESTful APIs,
            developing reusable React components, managing application state,
             and integrating frontend and backend systems efficiently.
Proficient in implementing authentication and authorization (JWT, Passport.js), 
performing CRUD operations, and optimizing database queries for performance
 and security. Experienced with API testing using Postman, version control 
 using Git and GitHub, and deploying applications on cloud platforms like Heroku and Netlify.
  Adept at debugging, refactoring code, and delivering clean, maintainable solutions
   aligned with modern web standards.
        </p>

        {/* Education Section */}
        <div className="education-section">
          <h3 className="education-title">Education</h3>
          <div className="education-divider"></div>
          
          <div className="education-grid">
            {/* Bachelor Degree Card */}
            <div className="education-card">
              <h4 className="education-year">2021-2025</h4>
              <h5 className="education-degree">BS in Computer Science</h5>
              <p className="education-institute">UNIVERSITY OF PESHAWAR</p>
              <p className="education-grade">Grade: First class distinction.</p>
            </div>

            {/* Higher Secondary Card */}
            <div className="education-card">
              <h4 className="education-year">2019-2021</h4>
              <h5 className="education-degree">Higher Secondary School</h5>
              <p className="education-institute">THE City Collage Peshawar</p>
              <p className="education-grade">Grade: First class distinction.</p>
            </div>
          </div>

          {/* Download CV Button */}
 <a
  href="/Muhammad_wisal_Resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="download-cv-btn"
>
  DOWNLOAD CV
</a>


        </div>
      </div>
    </section>
  );
}
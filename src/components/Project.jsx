import React from 'react';
import '../styles/Project.css';

export default function Project() {
const projects = [
  {
    id: 1,
    title: "QuizCraft – Intelligent Quiz System",
    image: "/Quiz_P.PNG",
    description:
      "QuizCraft is a full-stack MERN application designed for teachers and students to create, assign, and attempt quizzes. I developed the complete backend using Node.js, Express.js, and MongoDB, implemented JWT and Firebase-based authentication, and built a responsive React frontend. Key features include random and custom quiz generation, role-based access, timer-based quizzes, result calculation, and PDF export functionality."
  },
  {
    id: 2,
    title: "SmartHub – Project Management System",
    image: "/smartHub_p.PNG",
    description:
      "SmartHub  is a Project Managment System. I worked on both frontend and backend, implementing secure authentication, RESTful APIs, and dynamic dashboards. The system includes user management, data visualization, CRUD operations, and responsive UI components built with React and modern CSS frameworks."
  },
  {
    id: 3,
    title: "Tera Marketing – Business Web Platform",
    image: "/Tera_Project.PNG",
    description:
      "Tera Marketing is a professional business website developed using the MERN stack. I focused on building scalable backend APIs, dynamic content management, and a modern responsive frontend. The project emphasizes performance optimization, clean UI design, SEO-friendly structure, and smooth integration between frontend and backend services."
  }
];


  const stats = [
    { number: '5', label: 'Achievements' },
    { number: '10', label: 'Projects' },
    { number: '100+', label: 'Mentored Students' },
    { number: '30', label: 'Small Rewards' }
  ];

  return (
    <section className="project-section">
      <div className="project-container">
        <div className="project-header">
          <h2 className="project-title">Projects</h2>
          <div className="project-background-text">Projects</div>
        </div>
        
        <p className="project-subtitle">Below are the Projects that I have tested.</p>

       
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  
<div className="github-cta-section">
 
  <div className="background-overlay"></div>

  <div className="stats-container">
    {stats.map((stat, index) => (
      <div key={index} className="stat-card">
        <h3 className="stat-number">{stat.number}</h3>
        <p className="stat-label">{stat.label}</p>
      </div>
    ))}
  </div>


  <div className="github-cta-content">
    <h2 className="github-cta-title">
      More projects on <span className="github-highlight">Github</span>
    </h2>
    <p className="github-cta-subtitle">
      I love to solve business problems & uncover hidden data stories
    </p>
    <a
      href="https://github.com/WisalMomand"
      className="github-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      GITHUB
    </a>
  </div>
</div>
    </section>
  );
}
export const skills = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'REST APIs', 'Microservices'] },
  { title: 'Databases & Cache', items: ['MySQL', 'PostgreSQL', 'Redis', 'Query optimization'] },
  { title: 'Cloud & DevOps', items: ['AWS Services', 'Docker', 'Git', 'CI/CD', 'Kubernetes'] },
  { title: 'Testing', items: ['JUnit', 'Postman'] },
  { title: 'Frontend', items: ['JavaScript', 'ReactJS', 'Redux', 'HTML / CSS', 'Tailwind CSS'] },
]

export const experience = [
  {
    period: 'Oct 2024 — Present', role: 'Software Engineer', company: 'Cognizant', current: true,
    project: 'Development & Maintenanece',
    points: [
      'Developing new features, enhancing existing modules, and resolving production issues.',
      'Developed and maintained REST APIs and technical documentation for 30+ APIs, supporting application maintenance and consistent integration practices.',
      'Optimized SQL queries and database operations, including indexing for large datasets, reducing API response time by 60% in a live production environment.',
      'Implemented authentication updates to track failed login attempts and worked on Roles and Operators modules.',
      'Improved validation and error handling while collaborating in an Agile team.',
    ],
  },
  {
    period: 'Aug 2023 — Feb 2024', role: 'Backend Developer Intern', company: 'TalentID', current: false,
    project: 'Support & Development',
    points: [
      'Resolved data issues through SQL scripts, cleanup, duplicate merging, and data consistency fixes.',
      'Optimized queries on tables with 1.5M+ records through indexing and query improvements.',
      'Delivered Java / Spring Boot enhancements and supported bug fixes across application modules.',
    ],
  },
]

export const projects = [
  {
    title: 'Dev Challenges', type: 'Full-stack application', description: 'Developer Learning & Progress Tracking Platform',
    details: [
      'Developed a full-stack platform to document software development challenges, troubleshooting attempts, solutions, and technical learnings.',
      'Built REST APIs using Java and Spring Boot, with PostgreSQL and JPA/Hibernate for data persistence and entity management.', 
      'Implemented JWT-based authentication using Spring Security and BCrypt password hashing to secure user accounts and authenticated API requests.',
      'Developed responsive ReactJS interfaces for user profiles and challenge management, enabling developers to document and showcase their problem-solving experiences.',
      'Integrated functionality to showcase development challenge profiles on LinkedIn or include them in a resume, highlighting problem-solving experiences and technical growth.'
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JPA/Hibernate', 'Docker', 'ReactJS', 'Tailwind CSS'], link: 'https://github.com/',
  },
  {
    title: 'URL Shortener', type: 'Backend Service', description: 'A low-latency URL shortening service designed for high-read traffic and reliable redirects.',
    details: [
      'Built a backend URL-shortening service using Base62 encoding to generate compact short URLs.', 
      'Implemented Redis caching to reduce database load for frequently accessed URLs and rate limiting to control abusive traffic.', 
      'Containerized the service using Docker'],
    tags: ['Java', 'Spring Boot', 'Redis', 'Docker'], link: 'https://github.com/',
  },
  {
    title: 'E-Commerce Microservices', type: 'Distributed system', description: 'A microservices application split into user, product, and order services.',
    details: [
      'Designed and developed a Spring Boot-based e-commerce backend using independently deployable User, Product, Inventory, and Order microservices.',
      'Implemented REST APIs and service-to-service communication using OpenFeign, enabling services to retrieve and exchange required business data. ',
      'Designed service-specific data models and database interactions using JPA/Hibernate and PostgreSQL, maintaining clear boundaries between microservices. '
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'], link: 'https://github.com/',
  },
]

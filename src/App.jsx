import './App.css'

const skills = [
  {
    title: 'Programming Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'Backend & Frameworks',
    items: ['Spring Boot', 'REST APIs', 'Node.js', 'Express']
  },
  {
    title: 'DevOps & Tools',
    items: ['Git', 'Docker', 'Jenkins', 'Kubernetes']
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'SQL', 'JPA/Hibernate']
  },
  {
    title: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Vite']
  },
  {
    title: 'Testing',
    items: ['JUnit', 'Mockito', 'Integration Testing']
  }
]

const projects = [
  {
    title: 'Order Management API',
    description:
      'Java Spring Boot REST API for managing users, orders and products with DTOs, validation and PostgreSQL.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API']
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal developer portfolio built with React to showcase projects, experience and technical skills.',
    tech: ['React', 'JavaScript', 'CSS', 'Vite']
  },
  {
    title: 'SWAPI Connector',
    description:
      'Java-based connector project exploring API integration, seeded searches and data transformation.',
    tech: ['Java', 'Maven', 'APIs', 'JSON']
  }
]

function App() {
  return (
    <main>
      <nav className="navbar">
        <strong>Dennis Sasi</strong>
        <div>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <span className="badge">Available for opportunities</span>
          <h1>Hello, I'm Dennis Sasi</h1>
          <h2>Java Backend Developer building reliable APIs and platform tools.</h2>
          <p>
            I work with Java, Spring Boot, SQL, React and DevOps tooling to build
            maintainable backend systems and full-stack portfolio projects.
          </p>

          <div className="actions">
            <a className="primary" href="#projects">View My Work</a>
            <a className="secondary" href="#contact">Contact Me</a>
          </div>

          <div className="stats">
            <div><strong>3+</strong><span>Projects</span></div>
            <div><strong>Java</strong><span>Main Stack</span></div>
            <div><strong>React</strong><span>Portfolio UI</span></div>
          </div>
        </div>

        <div className="hero-image">
          <div className="avatar">DS</div>
          <div className="status">● Available for hire</div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <p className="section-intro">
          Technologies I use across backend development, frontend projects and deployment workflows.
        </p>

        <div className="grid">
          {skills.map((group) => (
            <div className="card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section narrow">
        <h2>Professional Experience</h2>
        <p className="section-intro">
          Backend-focused development experience across APIs, platform tooling and operational support.
        </p>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Software Developer</h3>
              <strong>Platform / Backend Engineering</strong>
            </div>
            <span>2024 - Present</span>
          </div>
          <p>
            Built and maintained backend services, worked on REST APIs, validation logic,
            production support, automation scripts and cross-team platform improvements.
          </p>
          <div className="tags">
            <span>Java</span><span>Spring Boot</span><span>SQL</span><span>Kubernetes</span>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <p className="section-intro">
          A selection of personal projects demonstrating backend, frontend and integration skills.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">{project.title.charAt(0)}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-links">
                  <button>Code</button>
                  <button>Demo</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section narrow">
        <h2>Let's Work Together</h2>
        <p className="section-intro">
          Open to backend Java roles, full-stack projects and software engineering opportunities.
        </p>

        <div className="contact-card">
          <p><strong>Email</strong></p>
          <p>dennis_1994@hotmail.co.uk</p>
          <p><strong>GitHub</strong></p>
          <p>github.com/Dnns9491</p>
          <p><strong>Location</strong></p>
          <p>United Kingdom</p>
        </div>
      </section>

      <footer>
        <strong>Dennis Sasi</strong>
        <p>Java Developer | Spring Boot | React | SQL</p>
      </footer>
    </main>
  )
}

export default App
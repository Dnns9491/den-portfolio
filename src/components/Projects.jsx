import projects from '../data/projects'

function Projects() {
  return (
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
  )
}

export default Projects

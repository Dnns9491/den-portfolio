function Hero() {
  return (
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
  )
}

export default Hero

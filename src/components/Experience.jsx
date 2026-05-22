function Experience() {
  return (
    <section id="experience" className="section narrow">
      <h2>Professional Experience</h2>

      <p className="section-intro">
        Backend-focused software engineer with experience building and operating
        platform services supporting large-scale streaming and content management systems.
      </p>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Java Developer</h3>
            <strong>Sky – Global Streaming Platform Engineering</strong>
          </div>

          <span>2023 - Present</span>
        </div>

        <p>
          Part of the Global Streaming engineering team responsible for the final backend
          validation layer before content reaches production across multiple
          streaming propositions including NOWTV, NBCU and Showtime.
        </p>

        <p>
          Developed and maintained Java Spring Boot backend services focused on
          reliability, validation, data correctness and operational resilience
          within production-critical CMS and platform systems serving millions of users.
        </p>

        <p>
          Worked across backend APIs, automation tooling, incident response,
          Kubernetes operations and platform integrations while collaborating
          closely with Reliability Engineering and cross-functional teams.
        </p>

        <div className="tags">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>PostgreSQL</span>
          <span>REST APIs</span>
          <span>Kubernetes</span>
          <span>Jenkins</span>
          <span>Grafana</span>
          <span>Prometheus</span>
          <span>React</span>
          <span>Node.js</span>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Software Developer Consultant</h3>
            <strong>FDM Group</strong>
          </div>

          <span>2022 - Present</span>
        </div>

        <p>
          Completed an intensive Java engineering programme focused on backend
          development, object-oriented programming, SQL, frontend development
          and software engineering best practices.
        </p>

        <p>
          Worked on internal full-stack development projects while collaborating
          with stakeholders to gather requirements and deliver reactive web applications.
        </p>

        <div className="tags">
          <span>Java</span>
          <span>React</span>
          <span>SQL</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
        </div>
      </div>
    </section>
  )
}

export default Experience

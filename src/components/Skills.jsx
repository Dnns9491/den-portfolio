import skills from '../data/skills'

function Skills() {
  return (
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
  )
}

export default Skills

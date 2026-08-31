import { skills } from '../data/skills'

function Skills() {
  return (
    <section>
      <h2>Skills</h2>

      <div>
        <h3>Frontend</h3>
        <ul>
          {skills.frontend.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Backend</h3>
        <ul>
          {skills.backend.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Databases</h3>
        <ul>
          {skills.databases.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Tools</h3>
        <ul>
          {skills.tools.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
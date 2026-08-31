import { experience } from '../data/experience'

function Experience() {
  return (
    <section>
      <h2>Experiencia</h2>

      {experience.map((job) => (
        <article key={job.id}>
          <h3>{job.role}</h3>
          <p>{job.company}</p>
          <p>{job.period}</p>

          <ul>
            {job.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Experience
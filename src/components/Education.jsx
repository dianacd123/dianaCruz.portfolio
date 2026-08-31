import { education } from '../data/education'

function Education() {
  return (
    <section>
      <h2>Educación</h2>

      {education.map((item) => (
        <article key={item.id}>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <p>{item.period}</p>
          <p>{item.status}</p>
        </article>
      ))}
    </section>
  )
}

export default Education
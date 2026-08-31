function ProjectCard({ project }) {
  return (
    <article>
      <h3>{project.title}</h3>
      <p>{project.type}</p>
      <p>{project.role}</p>
      <p>{project.period}</p>
      <p>{project.description}</p>

      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
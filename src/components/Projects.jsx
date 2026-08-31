import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section>
      <h2>Proyectos</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  )
}

export default Projects
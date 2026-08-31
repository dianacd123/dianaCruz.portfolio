import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  const { t } = useTranslation()

  return (
    <section>
      <h2>{t('sections.projects')}</h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </section>
  )
}

export default Projects
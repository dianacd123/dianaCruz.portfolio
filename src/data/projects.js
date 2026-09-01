import paLaAsada from '../assets/projects/pa-la-asada.png'
import voltium from '../assets/projects/voltium.png'
import marketconnectLogistics from '../assets/projects/marketconnect-logistics.png'
import marketconnectMachinery from '../assets/projects/marketconnect-machinery.png'

export const projects = [
  {
    id: 1,
    technologies: [
      'Figma',
      'HTML5',
      'CSS',
      'JavaScript',
      'Java',
      'Spring Boot',
      'MySQL',
      'GitHub',
      'Jira'
    ],
    repository: 'https://github.com/AllStarproyect/Pa-lasada.git',
    demo: null,
    image: paLaAsada
  },
  {
    id: 2,
    technologies: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Figma',
      'AOS',
      'Popper.js'
    ],
    repository: 'https://github.com/Aldo3000/Voltium.git',
    demo: null,
    image: voltium
  },
  {
    id: 3,
    technologies: [
      'React'
    ],
    repository: null,
    demo: 'https://promarketconnect.com/',
    image: marketconnectLogistics
  },
  {
    id: 4,
    technologies: [
      'React'
    ],
    repository: null,
    demo: 'https://rentamaquinaria.promarketconnect.com/',
    image: marketconnectMachinery
  }
]
import marketconnectNormal from '../assets/projects/normal/marketconnect-logistics.png'
import marketconnectPixel from '../assets/projects/pixel/marketconnect-logistics.png'

import machineryNormal from '../assets/projects/normal/marketconnect-machinery.png'
import machineryPixel from '../assets/projects/pixel/marketconnect-machinery.png'

import asadaNormal from '../assets/projects/normal/pa-la-asada.png'
import asadaPixel from '../assets/projects/pixel/pa-la-asada.png'

import voltiumNormal from '../assets/projects/normal/voltium.png'
import voltiumPixel from '../assets/projects/pixel/voltium.png'

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
    imageNormal: asadaNormal,
    imagePixel: asadaPixel,
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
    imageNormal: voltiumNormal,
    imagePixel: voltiumPixel,
  },
  {
    id: 3,
    technologies: [
      'React'
    ],
    repository: null,
    demo: 'https://promarketconnect.com/',
    imageNormal: marketconnectNormal,
    imagePixel: marketconnectPixel,
  },
  {
    id: 4,
    technologies: [
      'React'
    ],
    repository: null,
    demo: 'https://rentamaquinaria.promarketconnect.com/',
    imageNormal: machineryNormal,
    imagePixel: machineryPixel,
  }
]
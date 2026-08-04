export type Project = {
  title: string
  description: string
  highlights: string[]
  technologies: string[]
  repositoryUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Arbaaz Sumar Portfolio',
    description:
      'A production-style software engineering portfolio built to demonstrate reusable architecture, automated testing, accessibility and professional development workflows.',
    highlights: [
      'Created a reusable design system using typed React components',
      'Configured automated formatting, linting, testing and production builds',
      'Added continuous integration using GitHub Actions',
      'Used issue-driven development, feature branches and pull-request reviews',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Vitest', 'GitHub Actions'],
    repositoryUrl: 'https://github.com/arbaaz-77/arbaaz-sumar-portfolio',
  },
  {
    title: 'Citadel Archive',
    description:
      'A Game of Thrones-inspired command-line archive demonstrating object-oriented design, data persistence, validation and automated testing.',
    highlights: [
      'Modelled characters and archive behaviour using object-oriented programming',
      'Implemented JSON-based persistence and recovery',
      'Added validation, duplicate prevention and error handling',
      'Created automated tests using pytest and mocking',
    ],
    technologies: ['Python', 'OOP', 'JSON', 'Pytest', 'Git'],
    repositoryUrl: 'https://github.com/arbaaz-77/citadel',
  },
  {
    title: 'Figur-atively',
    description:
      'An e-commerce application for browsing and purchasing action figures, with authentication, persistent application state and Firebase-backed product data.',
    highlights: [
      'Managed application state using Redux',
      'Implemented authentication and data storage with Firebase',
      'Persisted shopping state between browser sessions',
      'Built reusable product and shopping-flow components',
    ],
    technologies: ['React', 'Redux', 'Firebase', 'Sass'],
    repositoryUrl: 'https://github.com/arbaaz-77/figur-atively',
    liveUrl: 'https://figuratively.netlify.app/',
  },
  {
    title: 'GameHub',
    description:
      'A responsive game-discovery application that consumes external game data and helps users explore titles through filtering and reusable interface components.',
    highlights: [
      'Consumed remote game data using Axios',
      'Built the application using React and TypeScript',
      'Created reusable filtering and discovery components',
      'Added responsive presentation and subtle interface motion',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Axios', 'Chakra UI'],
    repositoryUrl: 'https://github.com/arbaaz-77/gamehub',
    liveUrl: 'https://gamehub-lac.vercel.app/',
  },
]

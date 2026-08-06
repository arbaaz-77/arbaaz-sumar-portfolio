export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C#'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['.NET', 'REST APIs'],
  },
  {
    title: 'Quality Engineering',
    skills: [
      'Playwright',
      'Postman',
      'Manual Testing',
      'Test Design',
      'Debugging',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Azure DevOps', 'GitHub Actions', 'Git', 'CI/CD'],
  },
  {
    title: 'Engineering Practices',
    skills: [
      'Agile',
      'Scrum',
      'Sprint Planning',
      'Code Reviews',
      'Cross-functional Collaboration',
    ],
  },
]

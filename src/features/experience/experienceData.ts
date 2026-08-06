export type Experience = {
  company: string
  role: string
  duration: string
  summary: string
  impact: string[]
  technologies: string[]
  highlight: string
}

export const experiences: Experience[] = [
  {
    company: 'Deloitte',
    role: 'Quality Engineer → Software Engineer',
    duration: '2024 - Present',
    summary:
      "Contributed to Levvia, Deloitte's enterprise auditing platform supporting complex audit engagements. Worked within cross-functional Agile teams to deliver reliable software throughout the development lifecycle.",
    impact: [
      'Collaborated within Agile Release Trains alongside developers, Product Owners and Scrum Masters to deliver sprint goals.',
      'Developed and executed Playwright automation, performed manual testing and validated APIs using Postman.',
      'Used Azure DevOps for test case management, task planning, sprint boards, effort tracking and defect management.',
      'Investigated defects by analysing logs, reproducing issues and working with developers to identify root causes and support timely fixes.',
      'Expanded from Quality Assurance into Software Engineering after being recognised by the Technical Lead for initiative and collaboration.',
      'Took ownership of frontend and backend user stories, production defect fixes and quality-engineering work based on the needs of the sprint.',
    ],
    technologies: [
      'React',
      '.NET',
      'Python',
      'Playwright',
      'Postman',
      'Azure DevOps',
      'SpreadJS',
      'Agile',
    ],
    highlight:
      'Represented the team during Program Increment Planning in South Africa, contributing to enterprise-scale planning across multiple Agile Release Trains.',
  },
]

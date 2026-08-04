import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import { projects } from './projectData'

describe('Projects', () => {
  it('renders the featured projects and their available links', () => {
    render(<Projects />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Featured Projects',
      }),
    ).toBeInTheDocument()

    projects.forEach((project) => {
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: project.title,
        }),
      ).toBeInTheDocument()

      if (project.repositoryUrl) {
        expect(
          screen.getByRole('link', {
            name: `${project.title} repository`,
          }),
        ).toHaveAttribute('href', project.repositoryUrl)
      }

      if (project.liveUrl) {
        expect(
          screen.getByRole('link', {
            name: `${project.title} live demo`,
          }),
        ).toHaveAttribute('href', project.liveUrl)
      }
    })
  })
})

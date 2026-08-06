import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'
import { experiences } from './experienceData'

describe('Experience', () => {
  it('renders professional experience and engineering impact', () => {
    render(<Experience />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Experience',
      }),
    ).toBeInTheDocument()

    experiences.forEach((experience) => {
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: experience.company,
        }),
      ).toBeInTheDocument()

      expect(screen.getByText(experience.role)).toBeInTheDocument()
      expect(screen.getByText(experience.highlight)).toBeInTheDocument()
    })
  })
})

import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import { skillGroups } from './skillsData'

describe('Skills', () => {
  it('renders grouped engineering skills', () => {
    render(<Skills />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Skills',
      }),
    ).toBeInTheDocument()

    skillGroups.forEach((group) => {
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: group.title,
        }),
      ).toBeInTheDocument()

      group.skills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument()
      })
    })
  })
})

import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about section', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'About',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/I began my career/i)).toBeInTheDocument()

    expect(
      screen.getByText(/Starting in Quality Assurance/i),
    ).toBeInTheDocument()

    expect(screen.getByText(/I was trusted to contribute/i)).toBeInTheDocument()
  })
})

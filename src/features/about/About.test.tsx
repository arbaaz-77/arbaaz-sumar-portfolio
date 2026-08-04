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

    expect(
      screen.getByText(/I began my career building software/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Working in QA changed the way/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Today I combine that quality-first mindset/i),
    ).toBeInTheDocument()
  })
})

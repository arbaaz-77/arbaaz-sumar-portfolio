import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders contact destinations', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "Let's work together",
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:arbaaz970@gmail.com',
    )

    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/arbaaz-sumar/',
    )

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/arbaaz-77',
    )
  })
})

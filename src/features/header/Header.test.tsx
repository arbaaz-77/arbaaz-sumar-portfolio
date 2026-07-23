import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand and primary navigation links', () => {
    render(<Header />)

    expect(
      screen.getByRole('navigation', {
        name: 'Primary navigation',
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Arbaaz Sumar' })).toHaveAttribute(
      'href',
      '#top',
    )

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#about',
    )

    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute(
      'href',
      '#experience',
    )

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )

    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute(
      'href',
      '#skills',
    )

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})

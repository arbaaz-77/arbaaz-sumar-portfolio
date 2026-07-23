import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('introduces Arbaaz and provides navigation links', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Arbaaz Sumar',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/engineering-first mindset/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'View my work' })).toHaveAttribute(
      'href',
      '#projects',
    )

    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})

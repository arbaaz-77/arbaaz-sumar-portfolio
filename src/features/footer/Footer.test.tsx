import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the portfolio footer', () => {
    render(<Footer />)

    expect(screen.getByText('Arbaaz Sumar')).toBeInTheDocument()

    expect(
      screen.getByText(`© ${new Date().getFullYear()} Arbaaz Sumar`),
    ).toBeInTheDocument()
  })
})

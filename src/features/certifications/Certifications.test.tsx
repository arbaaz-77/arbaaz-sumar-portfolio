import { render, screen } from '@testing-library/react'
import { Certifications } from './Certifications'

describe('Certifications', () => {
  it('renders the certifications section', () => {
    render(<Certifications />)

    expect(
      screen.getByRole('heading', { name: 'Certifications' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: 'AWS Certified AI Practitioner',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: 'AWS Certified Cloud Practitioner',
      }),
    ).toBeInTheDocument()
  })

  it('renders credential links for each certification', () => {
    render(<Certifications />)

    const credentialLinks = screen.getAllByRole('link', {
      name: /view credential/i,
    })

    expect(credentialLinks).toHaveLength(2)

    credentialLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })
})

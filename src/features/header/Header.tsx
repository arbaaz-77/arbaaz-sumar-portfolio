import { Container } from '@/components/ui/Container'

import './Header.css'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="header">
      <Container>
        <nav className="header__nav" aria-label="Primary navigation">
          <a className="header__brand" href="#top">
            Arbaaz Sumar
          </a>

          <ul className="header__links">
            {navigationItems.map(({ label, href }) => (
              <li key={href}>
                <a className="header__link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

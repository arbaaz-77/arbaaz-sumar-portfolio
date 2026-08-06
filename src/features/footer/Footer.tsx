import { Container } from '@/components/ui/Container'

import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div>
            <p className="footer__name">Arbaaz Sumar</p>

            <p className="footer__message">
              Built with React, TypeScript and a quality-first engineering
              mindset.
            </p>
          </div>

          <p className="footer__copyright">
            © {new Date().getFullYear()} Arbaaz Sumar
          </p>
        </div>
      </Container>
    </footer>
  )
}

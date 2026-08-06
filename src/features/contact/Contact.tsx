import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

import './Contact.css'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:arbaaz970@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arbaaz-sumar/',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/arbaaz-77',
    external: true,
  },
]

export function Contact() {
  return (
    <Section id="contact" className="contact">
      <Container>
        <Stack>
          <div className="contact__content">
            <Heading level={2}>Let&apos;s work together</Heading>

            <p className="contact__description">
              I&apos;m open to software engineering and AI-focused opportunities
              where I can contribute across development, quality and reliable
              delivery.
            </p>

            <ul className="contact__links" aria-label="Contact links">
              {contactLinks.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    className="contact__link"
                    href={href}
                    {...(external
                      ? {
                          target: '_blank',
                          rel: 'noreferrer',
                        }
                      : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

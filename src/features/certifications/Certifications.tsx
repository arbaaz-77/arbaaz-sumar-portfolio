import { Stack } from '@/components/layout/Stack'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { certifications } from './certificationsData'

import './Certifications.css'

export function Certifications() {
  return (
    <Section id="certifications" className="certifications">
      <Container>
        <Stack>
          <Heading level={2}>Certifications</Heading>
          <div className="certification__lis">
            {certifications.map(({ name, provider, year, credentialUrl }) => (
              <article className="certification-card" key={name}>
                <h3>{name}</h3>

                <p className="certification-card__provider">{provider}</p>

                <p className="certification-card__year">{year}</p>

                <a
                  className="certification-card__link"
                  href={credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Credential →
                </a>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

import { Stack } from '@/components/layout/Stack'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { certifications } from './certificationsData'

import awsAiPractitioner from '@/assets/certifications/aws-certified-ai-practitioner.png'
import awsCloudPractitioner from '@/assets/certifications/aws-certified-cloud-practitioner.png'

import './Certifications.css'

export function Certifications() {
  return (
    <Section id="certifications" className="certifications">
      <Container>
        <Stack>
          <Heading level={2}>Certifications</Heading>
          <div className="certification__list">
            {certifications.map(({ name, provider, year, credentialUrl }) => {
              const badge =
                name === 'AWS Certified AI Practitioner'
                  ? awsAiPractitioner
                  : awsCloudPractitioner

              return (
                <article className="certification-card" key={name}>
                  <img
                    className="certification-card__badge"
                    src={badge}
                    alt={`${name} certification badge`}
                  />

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
              )
            })}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

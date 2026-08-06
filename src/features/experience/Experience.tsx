import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

import { ExperienceCard } from './ExperienceCard'
import { experiences } from './experienceData'
import './Experience.css'

export function Experience() {
  return (
    <Section id="experience" className="experience">
      <Container>
        <Stack>
          <div className="experience__intro">
            <Heading level={2}>Experience</Heading>

            <p className="experience__description">
              Enterprise software experience shaped by quality engineering,
              cross-functional collaboration and a willingness to contribute
              wherever the team needed support.
            </p>
          </div>

          <div className="experience__list">
            {experiences.map((experience) => (
              <ExperienceCard
                experience={experience}
                key={`${experience.company}-${experience.role}`}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

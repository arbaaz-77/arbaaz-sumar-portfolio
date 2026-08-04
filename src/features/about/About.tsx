import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'

import './About.css'

export function About() {
  return (
    <Section id="about" className="about">
      <Container>
        <Stack>
          <article className="about__content">
            <Heading level={2}>About</Heading>

            <p className="about__paragraph">
              I began my career building software before moving into Quality
              Assurance, where I developed a deeper understanding of
              reliability, maintainability and the details that determine
              whether software succeeds in production.
            </p>

            <p className="about__paragraph">
              Working in QA changed the way I approach engineering. Instead of
              only asking whether a feature works, I learned to ask how it
              behaves at the edges, how it fails, how easily it can be tested
              and whether the next engineer can understand and maintain it.
            </p>

            <p className="about__paragraph">
              Today I combine that quality-first mindset with modern software
              development while expanding my skills in AWS, Python and
              artificial intelligence. My goal is to build software that is
              reliable, maintainable and genuinely useful to the people who
              depend on it.
            </p>
          </article>
        </Stack>
      </Container>
    </Section>
  )
}

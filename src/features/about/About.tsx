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
              I began my career building software before joining Deloitte, where
              working on Levvia—Deloitte's enterprise auditing platform—deepened
              my understanding of how reliable software is designed, delivered
              and maintained at scale.
            </p>

            <p className="about__paragraph">
              Starting in Quality Assurance gave me a different perspective on
              engineering. I learned to think beyond whether a feature simply
              works, focusing instead on reliability, maintainability,
              production readiness and collaboration throughout the software
              development lifecycle. Those experiences continue to shape how I
              approach every project I build. That quality-first mindset,
              together with a genuine enthusiasm for working alongside
              developers, allowed me to grow beyond my original
              responsibilities.
            </p>

            <p className="about__paragraph">
              I was trusted to contribute across both Quality Assurance and
              Software Engineering, developing frontend and backend solutions,
              investigating production defects, and supporting the team wherever
              I could help deliver sprint goals. Today I combine software
              development with a quality-first engineering mindset while
              expanding my expertise in AWS, Python and artificial intelligence.
              My goal is to build software that is reliable, maintainable and
              genuinely useful to the people who depend on it.
            </p>
          </article>
        </Stack>
      </Container>
    </Section>
  )
}

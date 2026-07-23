import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { LinkButton } from '@/components/ui/LinkButton'
import { Text } from '@/components/ui/Text'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'

import './Hero.css'

export function Hero() {
  return (
    <Section className="hero">
      <Container>
        <Stack>
          <Text tone="accent">
            Software Developer · QA Engineer · AWS Learner
          </Text>

          <Heading level={1}>Arbaaz Sumar</Heading>

          <Text tone="secondary">
            I build reliable software with an engineering-first mindset,
            combining development experience with a strong foundation in quality
            assurance.
          </Text>

          <div className="hero__actions">
            <LinkButton href="#projects">View my work</LinkButton>

            <LinkButton href="#contact" variant="secondary">
              Get in touch
            </LinkButton>
          </div>

          <Text className="hero__status" tone="secondary">
            Currently building with React, TypeScript, Python and AWS.
          </Text>
        </Stack>
      </Container>
    </Section>
  )
}

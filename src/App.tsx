import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function App() {
  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <Text tone="accent">
              Software Developer · QA Engineer · AWS Learner
            </Text>

            <Heading level={1}>Arbaaz Sumar</Heading>

            <Text tone="secondary">
              Building reliable software with an engineering-first mindset.
            </Text>
          </Stack>
        </Container>
      </Section>
    </main>
  )
}

export default App

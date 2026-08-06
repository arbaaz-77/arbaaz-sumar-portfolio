import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

import { SkillGroup } from './SkillGroup'
import { skillGroups } from './skillsData'
import './Skills.css'

export function Skills() {
  return (
    <Section id="skills" className="skills">
      <Container>
        <Stack>
          <div className="skills__intro">
            <Heading level={2}>Skills</Heading>

            <p className="skills__description">
              The technologies, practices and delivery methods I use to build,
              test and maintain reliable software.
            </p>
          </div>

          <div className="skills__grid">
            {skillGroups.map((group) => (
              <SkillGroup group={group} key={group.title} />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

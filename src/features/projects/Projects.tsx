import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'

import { ProjectCard } from './ProjectCard'
import { projects } from './projectData'
import './Projects.css'

export function Projects() {
  return (
    <Section id="projects" className="projects">
      <Container>
        <Stack>
          <div className="projects__intro">
            <Heading level={2}>Featured Projects</Heading>

            <p className="projects__description">
              Selected work that demonstrates how I approach architecture,
              quality, testing, state management, and modern frontend
              development.
            </p>
          </div>

          <div className="projects__list">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

import { ProjectGallery } from './ProjectGallery'
import type { Project } from './projectData'
import './Projects.css'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    highlights,
    technologies,
    repositoryUrl,
    liveUrl,
    images,
  } = project

  return (
    <article className="project-card">
      {images && images.length > 0 && (
        <ProjectGallery title={title} images={images} />
      )}

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <ul
          className="project-card__technologies"
          aria-label={`${title} technologies`}
        >
          {technologies.map((technology) => (
            <li className="project-card__technology" key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <p className="project-card__description">{description}</p>

        <div>
          <h4 className="project-card__highlights-heading">
            Engineering highlights
          </h4>

          <ul className="project-card__highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="project-card__links">
          {repositoryUrl && (
            <a
              className="project-card__link"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} repository`}
            >
              Github
            </a>
          )}

          {liveUrl && (
            <a
              className="project-card__link project-card__link--secondary"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live demo`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

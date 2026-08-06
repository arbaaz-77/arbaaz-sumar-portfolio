import type { Experience } from './experienceData'

type ExperienceCardProps = {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, role, duration, summary, impact, technologies, highlight } =
    experience

  return (
    <article className="experience-card">
      <header className="experience-card__header">
        <div>
          <h3 className="experience-card__company">{company}</h3>
          <p className="experience-card__role">{role}</p>
        </div>

        <p className="experience-card__duration">{duration}</p>
      </header>

      <p className="experience-card__summary">{summary}</p>

      <div className="experience-card__section">
        <p className="experience-card__label">Engineering impact</p>

        <ul className="experience-card__impact">
          {impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="experience-card__section">
        <p className="experience-card__label">Technologies</p>

        <ul
          className="experience-card__technologies"
          aria-label={`${company} technologies`}
        >
          {technologies.map((technology) => (
            <li className="experience-card__technology" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <aside className="experience-card__highlight">
        <p className="experience-card__label">Professional highlight</p>
        <p>{highlight}</p>
      </aside>
    </article>
  )
}

import type { SkillGroup as SkillGroupType } from './skillsData'

type SkillGroupProps = {
  group: SkillGroupType
}

export function SkillGroup({ group }: SkillGroupProps) {
  const { title, skills } = group

  return (
    <article className="skill-group">
      <h3 className="skill-group__title">{title}</h3>

      <ul className="skill-group__list" aria-label={`${title} skills`}>
        {skills.map((skill) => (
          <li className="skill-group__item" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}

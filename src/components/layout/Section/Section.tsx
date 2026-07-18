import type { ComponentPropsWithoutRef } from 'react'
import './Section.css'

type SectionProps = ComponentPropsWithoutRef<'section'>

export function Section({ className = '', ...props }: SectionProps) {
  const classes = ['section', className].filter(Boolean).join(' ')

  return <section className={classes} {...props} />
}

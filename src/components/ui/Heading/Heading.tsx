import type { ComponentPropsWithoutRef, ElementType } from 'react'
import './Heading.css'

type HeadingLevel = 1 | 2 | 3

type HeadingProps = {
  level: HeadingLevel
} & ComponentPropsWithoutRef<'h1'>

export function Heading({ level, className = '', ...props }: HeadingProps) {
  const Tag = `h${level}` as ElementType

  const classes = ['heading', `heading--level-${level}`, className]
    .filter(Boolean)
    .join(' ')

  return <Tag className={classes} {...props} />
}

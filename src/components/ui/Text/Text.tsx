import type { ComponentPropsWithoutRef } from 'react'
import './Text.css'

type TextTone = 'primary' | 'secondary' | 'accent'

type TextProps = {
  tone?: TextTone
} & ComponentPropsWithoutRef<'p'>

export function Text({
  tone = 'primary',
  className = '',
  ...props
}: TextProps) {
  const classes = ['text', `text--${tone}`, className].filter(Boolean).join(' ')

  return <p className={classes} {...props} />
}

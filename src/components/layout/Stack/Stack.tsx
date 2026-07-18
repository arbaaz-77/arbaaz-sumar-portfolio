import type { ComponentPropsWithoutRef } from 'react'
import './Stack.css'

type StackProps = ComponentPropsWithoutRef<'div'>

export function Stack({ className = '', ...props }: StackProps) {
  const classes = ['stack', className].filter(Boolean).join(' ')

  return <div className={classes} {...props} />
}

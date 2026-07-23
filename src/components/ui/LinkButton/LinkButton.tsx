import type { ComponentPropsWithoutRef } from 'react'
import './LinkButton.css'

type LinkButtonVariant = 'primary' | 'secondary'

type LinkButtonProps = {
  variant?: LinkButtonVariant
} & ComponentPropsWithoutRef<'a'>

export function LinkButton({
  variant = 'primary',
  className = '',
  ...props
}: LinkButtonProps) {
  const classes = ['link-button', `link-button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return <a className={classes} {...props} />
}

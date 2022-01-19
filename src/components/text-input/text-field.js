import clsx from 'clsx'
import { InputBase } from '@material-ui/core'
import { useStyle } from './style'

export const TextField = ({
  placeholder = '',
  value,
  type = '',
  autoComplete = '',
  hasError,
  className,
  onChange,
}) => {
  const classes = useStyle({ hasError })

  return (
    <InputBase
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      value={value}
      classes={{ root: clsx(className, classes.root), input: classes.input }}
      type={type}
      autoComplete={autoComplete}
      fullWidth
    />
  )
}

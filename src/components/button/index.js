import clsx from 'clsx'
import MuiButton from '@material-ui/core/Button'
import useStyle from './style'

const Button = ({ children, className, color, hollow, ...props }) => {
  const classes = useStyle({ color, hollow })

  return (
    <MuiButton
      disableElevation
      variant="contained"
      className={clsx(classes.button, className)}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button

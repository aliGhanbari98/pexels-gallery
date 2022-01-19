import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    background: theme.palette.primary.main,
    position: 'relative',
  },
  author: {
    fontSize: '12px',
    color: '#fafafa8c',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
}))

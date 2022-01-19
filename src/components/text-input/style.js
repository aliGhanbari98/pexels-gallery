import { alpha, makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  root: {
    height: 35,
  },
  input: {
    borderRadius: 11,
    position: 'relative',
    border: '1px solid',
    borderColor: ({ hasError }) =>
      hasError ? theme.palette.ui.red : theme.palette.ui.darkGray,
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: -0.08,
    height: '100%',
    padding: '0 12px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    '&:focus': {
      boxShadow: ({ hasError }) =>
        `${alpha(
          hasError ? theme.palette.ui.red : theme.palette.ui.veryDarkGray,
          0.5,
        )} 0 0 0 0.05rem`,
      borderColor: ({ hasError }) =>
        hasError ? theme.palette.ui.red : theme.palette.ui.veryDarkGray,
    },
  },
}))

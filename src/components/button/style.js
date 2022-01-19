import { darken, makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  button: {
    minWidth: 30,
    lineHeight: 1.5,
    letterSpacing: -0.08,
    fontSize: theme.spacing(1),
    color: ({ hollow, color }) =>
      hollow ? color || theme.palette.primary.main : theme.palette.ui.white,
    backgroundColor: ({ hollow, color }) =>
      hollow ? 'transparent' : color || theme.palette.primary.main,
    borderRadius: '11px',
    border: ({ hollow, color }) =>
      hollow ? `1px solid ${color || theme.palette.primary.main}` : 'none',
    padding: '5px 10px',
    '&:hover': {
      backgroundColor: ({ hollow, color }) =>
        darken(
          hollow
            ? 'rgba(243,243,243,0.51)'
            : color || theme.palette.primary.main,
          0.06,
        ),
    },
  },
}))

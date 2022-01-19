import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',

    padding: 60,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    width: '100%',
    height: '100%',
    maxWidth: '895px',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    background: theme.palette.ui.lightGray,

    padding: 15,
    marginLeft: 40,
  },
  personBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,

    '& svg': {
      color: theme.palette.ui.darkGray,
    },

    '& a': {
      color: theme.palette.ui.veryDarkGray,
      fontSize: '16px',
      marginLeft: 5,
    },
  },
  mainImage: {
    width: '100%',
    height: 'calc(100% - 219px)',

    borderRadius: '15px',
    objectFit: 'cover',
    marginBottom: 15,
  },
  thumbs: {
    width: '100%',
    height: 170,
    minHeight: 170,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'relative',
  },
  thumbBullet: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: theme.palette.ui.lightGray,

    position: 'absolute',
    bottom: '-28px',
    transition: 'left 0.5s',
  },
  thumbnail: {
    width: 'calc(33% - 8px)',
    height: 170,
    borderRadius: '15px',
    position: 'relative',
    overflow: 'hidden',

    cursor: 'pointer',

    '& .image': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    '& .shadow': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',

      backgroundImage:
        'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1))',
    },

    '& .text': {
      position: 'absolute',
      bottom: 10,
      left: 15,

      color: theme.palette.ui.lightGray,
      fontSize: '16px',
    },
  },
}))

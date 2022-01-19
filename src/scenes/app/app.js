import { Typography } from '@material-ui/core'
import Gallery from '../gallery'
import { useStyle } from './style'

const App = () => {
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Typography className={classes.author}>by Ali Ghanbari</Typography>
      <Gallery />
    </div>
  )
}

export default App

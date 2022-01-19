import { useState, useCallback } from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core'
import Button from '../../../components/button'
import { TextField } from '../../../components/text-input'

export const useStyle = makeStyles(theme => ({
  root: {
    width: '200px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    background: theme.palette.ui.lightGray,
  },
  actions: {
    flex: 1,
  },
  searchBox: {
    padding: 5,
  },
  searchBtn: {
    width: '100%',
    fontSize: '16px',
    marginTop: 10,
  },
  button: {
    borderRadius: '0 5px 5px 0',
    width: '90%',
    height: '40px',
    marginTop: 10,
    marginLeft: 0,
    transition: 'margin-left 0.3s',
  },
  selectedButton: {
    marginLeft: 22,
    borderRadius: '5px 0 0 5px',
  },
}))

const Sidebar = ({ images, selectedImage, onSelectImage, onSearch }) => {
  const classes = useStyle()
  const [topic, setTopic] = useState('')

  const onSearchCallback = useCallback(() => {
    onSearch(topic)
  }, [topic, onSearch])

  return (
    <Paper classes={classes} elevation={3}>
      <div className={classes.actions}>
        {images.map((image, index) => (
          <Button
            className={`${classes.button} ${
              image.id === selectedImage?.id ? classes.selectedButton : ''
            }`}
            onClick={onSelectImage(image.id)}
          >
            <Typography>{`Image ${index + 1}`}</Typography>
          </Button>
        ))}
      </div>
      <div className={classes.searchBox}>
        <TextField value={topic} placeholder="topic..." onChange={setTopic} />
        <Button
          className={classes.searchBtn}
          disabled={!topic}
          onClick={onSearchCallback}
        >
          Search
        </Button>
      </div>
    </Paper>
  )
}

export default Sidebar

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchImages } from '../../services/pexel'
import { loadImages, setCurrentImage } from '../_slice/gallery.slice'
import App from './app'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    searchImages('nature').then(({ photos }) => {
      dispatch(loadImages(photos))
      dispatch(setCurrentImage(photos[0].id))
    })
  }, [dispatch])

  return <App />
}

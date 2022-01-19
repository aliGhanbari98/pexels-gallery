import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchImages } from '../../services/pexel'
import {
  galleryCurrentImageView,
  galleryImagesView,
  loadImages,
  setCurrentImage,
} from '../_slice/gallery.slice'
import Gallery from './gallery'

export default () => {
  const images = useSelector(galleryImagesView)

  const currentImageId = useSelector(galleryCurrentImageView)
  const currentImage = useMemo(
    () => currentImageId && images.find(({ id }) => id === currentImageId),
    [images, currentImageId],
  )

  const dispatch = useDispatch()

  const setCurrent = useCallback(
    id => () => {
      dispatch(setCurrentImage(id))
    },
    [dispatch],
  )

  const searchCallback = useCallback(
    async topic => {
      console.log('topic', topic)
      const { photos } = await searchImages(topic)
      dispatch(loadImages(photos))
      dispatch(setCurrentImage(photos[0].id))
    },
    [dispatch],
  )

  return (
    <Gallery
      images={images}
      currentImage={currentImage}
      setCurrent={setCurrent}
      searchImages={searchCallback}
    />
  )
}

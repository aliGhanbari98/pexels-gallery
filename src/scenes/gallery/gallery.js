import { Paper, Typography } from '@material-ui/core'
import { PhotoCameraRounded } from '@material-ui/icons'
import Sidebar from './components/sidebar'
import { useStyle } from './style'

const bulletPos = [15, 50, 85]

const Gallery = ({ images, currentImage, setCurrent, searchImages }) => {
  const classes = useStyle()

  const currentImageIndex =
    currentImage && images.findIndex(({ id }) => id === currentImage.id)

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Sidebar
          images={images}
          selectedImage={currentImage}
          onSelectImage={setCurrent}
          onSearch={searchImages}
        />
        <Paper classes={{ root: classes.body }}>
          {currentImage ? (
            <>
              <div className={classes.personBox}>
                <PhotoCameraRounded />
                <a
                  href={currentImage.photographer_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {currentImage.photographer}
                </a>
              </div>

              <img
                className={classes.mainImage}
                src={currentImage.src.large2x}
                alt={currentImage.alt}
              />

              <div className={classes.thumbs}>
                <div
                  className={classes.thumbBullet}
                  style={{
                    left: `calc(${bulletPos[currentImageIndex]}% - 10px)`,
                  }}
                />
                {images.map((image, index) => (
                  <div
                    className={classes.thumbnail}
                    onClick={setCurrent(image.id)}
                  >
                    <img
                      className="image"
                      src={image.src.large}
                      alt={image.alt}
                    />
                    <div className="shadow" />
                    <Typography className="text">{`Image ${
                      index + 1
                    }`}</Typography>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </Paper>
      </div>
    </div>
  )
}

export default Gallery

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  topic: '',
  images: [],
  currentImage: null,
}

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    loadImages: (state, { payload }) => ({ ...state, images: payload }),

    setCurrentImage: (state, { payload }) => ({
      ...state,
      currentImage: payload,
    }),
  },
})

const { actions, reducer } = gallerySlice
export default reducer

// ACTIONS
export const loadImages = actions.loadImages

export const setCurrentImage = actions.setCurrentImage

// VIEW
export const galleryImagesView = state => state.gallery.images

export const galleryCurrentImageView = state => state.gallery.currentImage

import { combineReducers } from '@reduxjs/toolkit'
import galleryReducer from '../../scenes/_slice/gallery.slice'

const rootReducer = combineReducers({
  gallery: galleryReducer,
})

export default rootReducer

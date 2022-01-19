import { authConfig } from '../../setup/config'
import * as api from './api'

export const searchImages = async topic => {
  const authToken = authConfig.authToken
  const { data } = await api.fetchImages(topic, authToken)
  return data
}

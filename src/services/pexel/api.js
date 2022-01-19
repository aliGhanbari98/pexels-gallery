import axios from 'axios'
import { serverConfig } from '../../setup/config'

export const fetchImages = (topic, authToken) =>
  axios.get(`${serverConfig.pexelUrl}/search`, {
    params: {
      query: topic,
      per_page: 3,
    },
    headers: {
      Authorization: authToken,
    },
  })

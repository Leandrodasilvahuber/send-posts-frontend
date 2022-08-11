import { getToken } from '../cookies/cookies'

export default (SERVER_URI) => {
  const axios = require('axios').default
  const token = getToken()

  const router = axios.create({
    baseURL: SERVER_URI,
    timeout: 1000,
    headers: {
      'x-access-token': token,
    },
  })

  return router
}

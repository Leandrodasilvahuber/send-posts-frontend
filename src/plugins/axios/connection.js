import cookie from 'cookiejs'

export default (SERVER_URI) => {
  const axios = require('axios').default
  const token = cookie('token') || null

  const router = axios.create({
    baseURL: SERVER_URI,
    timeout: 1000,
    headers: {
      'x-access-token': token,
    },
  })

  return router
}

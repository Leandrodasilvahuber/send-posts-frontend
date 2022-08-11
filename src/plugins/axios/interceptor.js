import { setToken, setError } from '../cookies/cookies'

export default (connection) => {
  connection.interceptors.response.use(
    function (response) {
      setError(null)
      return response
    },

    function (error) {
      const message = error.response.data.message
      failedAuthenticateToken(message)
      setError(message)
      return Promise.reject(error)
    }
  )

  function failedAuthenticateToken(message) {
    if (message == 'Failed to authenticate token.') {
      setToken(null)
      document.location.reload(true)
    }
  }

  return connection
}

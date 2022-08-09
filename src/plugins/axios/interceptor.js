import cookie from 'cookiejs'

export default (connection) => {
  connection.interceptors.response.use(
    function (response) {
      cookie('error', null)
      return response
    },

    function (error) {
      const message = error.response.data.message
      failedAuthenticateToken(message)
      cookie('error', message, 1)
      return Promise.reject(error)
    }
  )

  function failedAuthenticateToken(message) {
    if (message == 'Failed to authenticate token.') {
      cookie('token', null)
      document.location.reload(true)
    }
  }

  return connection
}

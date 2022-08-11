import cookie from 'cookiejs'

const getError = () => {
  return cookie('error') || null
}

const setError = (error) => {
  cookie('error', error)
}

const getToken = () => {
  return cookie('token') || null
}

const setToken = (token) => {
  cookie('token', token)
}

export { getToken, setToken, getError, setError }

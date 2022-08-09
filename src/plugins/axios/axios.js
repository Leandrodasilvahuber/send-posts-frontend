import interceptor from './interceptor'
import connection from './connection'
import { SERVER_URI } from '../../../env'

export default () => {
  const axios = connection(SERVER_URI)
  return interceptor(axios)
}

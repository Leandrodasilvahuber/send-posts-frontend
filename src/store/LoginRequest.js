import axios from '../plugins/axios/axios'

export default async (user) => {
  const response = await axios().post('/login', {
    email: user.email,
    password: user.password,
  })

  return response
}

import axios from '../plugins/axios/axios'

export default async (user) => {
  const response = await axios().post('/users', {
    name: user.name,
    email: user.email,
    password: user.password,
  })

  return response
}

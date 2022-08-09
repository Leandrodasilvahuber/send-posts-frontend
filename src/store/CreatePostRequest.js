import axios from '../plugins/axios/axios'

export default async (post) => {
  const response = await axios().post('/post', {
    title: post.title,
    message: post.message,
  })

  return response
}

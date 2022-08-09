import axios from '../plugins/axios/axios'

export default async (id) => {
  const response = await axios().delete('/post', {
    data: { id: id },
  })

  return response
}

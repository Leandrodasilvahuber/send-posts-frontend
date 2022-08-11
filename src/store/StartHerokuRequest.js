import axios from '../plugins/axios/axios'

export default async () => {
  await axios().get('/')
}

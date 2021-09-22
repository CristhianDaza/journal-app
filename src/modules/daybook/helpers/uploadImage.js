import axios from 'axios'

const uploadImage = async (file) => {
  // eslint-disable-next-line no-useless-return
  if (!file) return

  try {
    const formData = new FormData()
    formData.append('upload_preset', 'journal-app')
    formData.append('file', file)
    const url = 'https://api.cloudinary.com/v1_1/crishtiandaza/image/upload'
    const { data } = await axios.post(url, formData)
    return data.secure_url
  } catch (error) {
    console.log(error)
    return null
  }
}

export default uploadImage

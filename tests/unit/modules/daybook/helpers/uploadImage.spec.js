import uploadImage from '../../../../../src/modules/daybook/helpers/uploadImage'
import axios from 'axios'

describe('Pruebas en el uploadImage', () => {
  test('debe de cargar un archivo y retornal el url', async () => {
    const { data } = await axios.get('https://res-console.cloudinary.com/crishtiandaza/thumbnails/transform/v1/image/upload//v1632276004/aHVzNW83aXVtYXhxd3A3ZGZpYjI=/drilldown', {
      responseType: 'arraybuffer'
    })

    const file = new File([data], 'goto.jpg')

    const url = await uploadImage(file)

    expect(typeof url).toBe('string')
  })
})

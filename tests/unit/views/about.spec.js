import { shallowMount } from '@vue/test-utils'
import About from '@/views/About'

describe('pruebas en el About View', () => {
  test('debe de renderizar el cpomponente correctamente', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

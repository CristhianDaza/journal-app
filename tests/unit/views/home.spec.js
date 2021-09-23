import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Pruebas en Home', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Home)
  })

  test('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('hacer click en el boton debe redireccionar a no-entry', () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = shallowMount(Home, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    wrapper.find('button').trigger('click')

    expect(mockRouter.push).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' })
  })
})

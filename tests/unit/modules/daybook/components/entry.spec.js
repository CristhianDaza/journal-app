import { shallowMount } from '@vue/test-utils'
import Entry from '@/modules/daybook/components/Entry'
import { entry } from '../../../mock-data/test-journal-state'

describe('Pruebas en el Entry.vue', () => {
  const mockRouter = {
    push: jest.fn()
  }
  const wrapper = shallowMount(Entry, {
    props: {
      entry
    },
    global: {
      mocks: {
        $router: mockRouter
      }
    }
  })

  test('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de redireccionar al hacer click en el entry-container', () => {
    const entryContainer = wrapper.find('.entry-container')
    entryContainer.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith({
      name: 'entry',
      params: {
        id: entry.id
      }
    })
  })

  test('pruebas en las propiedades computadas', () => {
    expect(wrapper.vm.day).toBe(21)
    expect(wrapper.vm.mount).toBe('Septiembre')
    expect(wrapper.vm.yearDay).toBe('2021, Martes')
  })
})

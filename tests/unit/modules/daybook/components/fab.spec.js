import { shallowMount } from '@vue/test-utils'
import Fab from '@/modules/daybook/components/Fab'

describe('test Fab.vue', () => {
  test('debe de mostrar el icono por argumento', () => {
    const wrapper = shallowMount(Fab, {
      props: {
        icon: 'plus'
      }
    })
    const icon = wrapper.find('i')
    expect(icon.classes('fa-plus')).toBeTruthy()
  })

  test('debe de emitir el evento on:click cuando se hace click', () => {
    const wrapper = shallowMount(Fab, {
      props: {
        icon: 'plus'
      }
    })

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('on:click')).toHaveLength(1)
  })
})

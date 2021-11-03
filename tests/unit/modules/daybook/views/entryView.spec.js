/* eslint-disable no-unused-vars */
import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../mock-data/test-journal-state'
import EntryView from '@/modules/daybook/views/EntryView.vue'
import Swal from 'sweetalert2'

const createVuexStore = (initialState) => createStore({
  modules: {
    journal: {
      ...journal,
      state: { ...initialState }
    }
  }
})

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
  showLoading: jest.fn(),
  close: jest.fn()
}))

describe('Pruebas en el Entryview', () => {
  const store = createVuexStore(journalState)
  store.dispatch = jest.fn()
  const mockRouter = {
    push: jest.fn()
  }

  let wrapper

  beforeEach(() => {
    jest.clearAllMocks()

    wrapper = shallowMount(EntryView, {
      props: {
        id: '-MkA-uLKS-d4JyT5Y-fs'
      },
      global: {
        mocks: {
          $router: mockRouter
        },
        plugins: [store]
      }
    })
  })

  test('debe de sacar al usuaior porque el id no existe', () => {
    const wrapper = shallowMount(EntryView, {
      props: {
        id: 'Este ID no existe en el STORE'
      },
      global: {
        mocks: {
          $router: mockRouter
        },
        plugins: [store]
      }
    })
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' })
  })

  test('debe de mostrar la entrada correctamente', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(mockRouter.push).not.toHaveBeenCalled()
  })

  test('debe de borrar la entrada y salir', () => {
    Swal.fire.mockRejectedValueOnce(Promise.resolve({ isConfirmed: true }))
    wrapper.find('.btn-danger').trigger('click')

    expect(Swal.fire).toHaveBeenCalledWith({
      title: '¿Está seguro?',
      text: 'Una vez borrado, no se puede recuperar',
      showDenyButton: true,
      confirmButtonText: 'Si, estoy seguro'
    })

    expect(store.dispatch).toHaveBeenCalledWith('journal/deleteEntry', '-MkA-uLKS-d4JyT5Y-fs')
    expect(mockRouter.push).toHaveBeenCalled()
  })
})

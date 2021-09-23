import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-journal-state'

const createVuexStore = (initialState) => createStore({
  modules: {
    journal: {
      ...journal,
      state: { ...initialState }
    }
  }
})

describe('Vuex - Pruebas en el Journal Module', () => {
  test('este es el estado inicial, debe de tener este state', () => {
    const store = createVuexStore(journalState)
    const { isLoading, entries } = store.state.journal

    expect(isLoading).toBeFalsy()
    expect(entries).toEqual(journalState.entries)
  })

  // MUTATIONS ======================
  test('mutation: setEntries', () => {
    const store = createVuexStore({ isLoading: true, entries: [] })
    store.commit('journal/setEntries', journalState.entries)

    expect(store.state.journal.entries.length).toBe(2)
    expect(store.state.journal.isLoading).toBeFalsy()
  })

  test('mutation: updateEntry', () => {
    const store = createVuexStore(journalState)
    const updatedEntry = {
      date: 1632268427987,
      text: 'Esta es una nueva entrada desde pruebas',
      id: '-Mk9lvPf9XGgehrwVSYD'
    }
    store.commit('journal/updateEntry', updatedEntry)
    const storeEntries = store.state.journal.entries
    expect(storeEntries.entries).toHaveLength(2)
    expect(storeEntries.entries.find(e => e.id === updatedEntry.id)).toEqual(updatedEntry)
  })

  test('mutation: addEntry deleteEntry', () => {
    const store = createVuexStore(journalState)
    store.commit('journal/addEntry', { id: 'ABC-123', text: 'Hola Mundo' })

    const storeEntries = store.state.journal.entries
    expect(storeEntries.length).toBe(3)
    expect(storeEntries.find(entries => entries.id === 'ABC-123')).toBeTruthy()

    store.commit('journal/deleteEntry', 'ABC-123')
    expect(store.state.journal.entries.length).toBe(2)
    expect(store.state.journal.entries.find(entries => entries.id === 'ABC-123')).toBeFalsy()
  })

  // ACTIONS ======================
  test('actions: loadEntries', async () => {
    const store = createVuexStore({ isLoading: true, entries: [] })
    await store.dispatch('journal/loadEntries')
    expect(store.state.journal.entries.length).toBe(6)
  })

  test('actions: updateEntry', async () => {
    const store = createVuexStore(journalState)
    const updatedEntry = {
      date: 1632268427987,
      text: 'Hola mundo v2 desde el mockData',
      id: '-Mk9lvPf9XGgehrwVSYD'
    }

    await store.dispatch('journal/updateEntry', updatedEntry)
    expect(store.state.journal.entries.length).toBe(2)
    expect(
      store.state.journal.entries.find(entry => entry.id === updatedEntry.id)
    ).toEqual(updatedEntry)
  })

  test('actions: createEntry and deleteEntry', async () => {
    const store = createVuexStore({ isLoading: true, entries: [] })
    const newEntry = {
      date: 1632268427987,
      text: 'Nueva entrada desde las pruebas'
    }
    const id = await store.dispatch('journal/createEntry', newEntry)
    expect(typeof id).toBe('string')
    expect(store.state.journal.entries.find(entry => entry.id === id)).toBeTruthy()

    await store.dispatch('journal/deleteEntry', id)
    expect(store.state.journal.entries.find(entry => entry.id === id)).toBeFalsy()
  })
})

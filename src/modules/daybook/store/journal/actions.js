import journalApi from '@/api/journalApi'

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')
  if (!data) {
    return commit('setEntries', [])
  }
  const entries = []
  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }
  commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => {
  const { date, text, picture, id } = entry
  const editEntry = { date, text, picture }
  await journalApi.put(`/entries/${id}.json`, editEntry)
  editEntry.id = entry.id
  commit('updateEntry', { ...editEntry })
}

export const createEntry = async ({ commit }, entry) => {
  const { date, text, picture } = entry
  const newEntry = { date, text, picture }
  const { data } = await journalApi.post('/entries.json', newEntry)
  newEntry.id = data.name
  commit('addEntry', { ...newEntry })
  return newEntry.id
}

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`)
  commit('deleteEntry', id)
}

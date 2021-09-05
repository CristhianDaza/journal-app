export const getEntriesByTerm = ({ entries }) => (term = '') => {
  if (term.length === 0) return entries
  return entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
}

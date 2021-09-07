import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://journal-app-vue-default-rtdb.firebaseio.com'
})

export default journalApi

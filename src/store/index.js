import { createStore } from 'vuex'
import journalModule from '../modules/daybook/store/journal'

export default createStore({
  modules: {
    journalModule
  }
})

<template>
  <div class="entry-list-container">
    <div class="p-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
        v-model="term"
      >
    </div>

    <div class="entry-scrollarea">
      <Entry
        v-for="item in entriesByTerm"
        :key="item.id"
        :entries="getEntriesByTerm"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
export default {
  name: 'EntryList',
  data () {
    return {
      term: ''
    }
  },
  components: {
    Entry: defineAsyncComponent(() => import('./Entry'))
  },
  computed: {
    ...mapGetters('journalModule', ['getEntriesByTerm']),
    entriesByTerm () {
      return this.getEntriesByTerm(this.term)
    }
  }
}
</script>

<style lang="scss" scoped>
  .entry-list-container {
    border-right: 1px solid #2C3E50;
    height: calc(100vh - 56px);
  }
  .entry-scrollarea {
    height: calc(100vh - 110px);
    overflow: scroll;
  }
</style>

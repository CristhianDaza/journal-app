<template>
  <template
    v-if="entry"
  >
    <div
      class="entry-title d-flex justify-content-between p-2"
    >
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ mount }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>
      <div>
        <button class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
      <textarea
        v-model="entry.text"
        placeholder="¿Qué sucedió hoy?"
      ></textarea>
    </div>
    <img
      src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg"
      alt="entry-picture"
      class="img-thumbnail"
    >
  </template>
  <Fab
    icon="save"
    @on:click="saveEntry"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
  name: 'EntryView',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      entry: null
    }
  },
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab'))
  },
  methods: {
    ...mapActions('journalModule', ['updateEntry']),
    loadEntry () {
      const entry = this.getEntryById(this.id)
      if (!entry) this.$router.push({ name: 'no-entry' })
      this.entry = entry
    },
    saveEntry () {
      this.updateEntry(this.entry)
    }
  },
  computed: {
    ...mapGetters('journalModule', ['getEntryById']),
    day () {
      const { day } = getDayMonthYear(this.entry.date)
      return day
    },
    mount () {
      const { mount } = getDayMonthYear(this.entry.date)
      return mount
    },
    yearDay () {
      const { yearDay } = getDayMonthYear(this.entry.date)
      return yearDay
    }
  },
  created () {
    this.loadEntry()
  },
  watch: {
    id () {
      this.loadEntry()
    }
  }
}
</script>

<style lang="scss" scoped>
  textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    resize: none;

    &:focus {
      outline: none;
    }

  }
  img  {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0 5px 10px rgba($color: #000, $alpha: .2);
  }
</style>

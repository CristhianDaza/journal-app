<template>
  <div class="d-flex justify-content-center">
    <h1 class="mt-5">No hay nada seleccionado</h1>
  </div>
  <Fab  icon="plus"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'NoEntrySelected',
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab'))
  }
}
</script>

<style lang="scss" scoped>
  .div {
    height: 100%;
  }
</style>

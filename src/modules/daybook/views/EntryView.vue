<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Septiembre</span>
      <span class="mx-2 fs-4 fw-light">2021, sabado</span>
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
      placeholder="¿Qué sucedió hoy?"
    ></textarea>
  </div>
  <Fab />
  <img
    src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  >
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'EntryView',
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab'))
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

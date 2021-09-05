<template>
  <div
    class="entry-container pb-3 pointer p-2"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">04</span>
      <span class="mx-1 fs-5">Septiembre</span>
      <span class="mx-2 fw-light">2021, sabado</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae, commodi cumque ea eveniet iusto nostrum placeat porro quae, quaerat quas recusandae sapiente sunt tenetur unde. Blanditiis illo itaque odio.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry'
}
</script>

<style lang="scss" scoped>
  .entry-container {
    border-bottom: 1px solid #2C3E50;
    transition: .2s all ease-in;

    &:hover {
      background-color: lighten($color: grey, $amount: 45);
    }

    .entry-description {
      font-size: 12px;
    }

    .entry-title {
      align-items: baseline;
    }
  }
</style>

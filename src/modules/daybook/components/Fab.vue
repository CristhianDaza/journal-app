<template>
  <button class="btn btn-primary">
    <i class="fa fa-plus"></i>
  </button>
</template>

<script>
export default {
  name: 'Fab'
}
</script>

<style lang="scss" scoped>
  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 100%;

    i {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

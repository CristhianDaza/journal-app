<template>
  <button
    @click="$emit('on:click')"
    class="btn btn-primary"
  >
    <i
      :class="`fa fa-2x fa-${icon}`"
    ></i>
  </button>
</template>

<script>
export default {
  name: 'Fab',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 100%;

    i {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<style scoped>
.btn {
  background: rgba(0, 156, 0, 0.7);
  box-shadow: 0 5px 0 0 rgb(0, 156, 0);
  transition: transform 200ms, box-shadow 200ms;
  outline: none;
}
.btn:hover {
  background: rgba(0, 200, 0, 1);
}
.btn:active {
  transform: translateY(2px);
  box-shadow: 0 0 0 0 rgb(0, 156, 0);
}
</style>

<template>
  <button
    class="btn font-bold p-2 rounded text-white"
    :class="this.fullWidth ? 'w-full' : 'w-[130px]'"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: { fullWidth: Boolean, title: String },
};
</script>

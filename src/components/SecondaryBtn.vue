<style scoped>
.btn {
  border: 2px solid rgb(206, 26, 26);
  color: rgb(206, 26, 26);
  outline: none;
}
.btn:hover {
  background-color: rgb(235, 140, 140);
  color: black;
}
.btn:active {
  background-color: rgb(128, 15, 15);
  color: white;
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
  name: "SecondaryBtn",
  props: { fullWidth: Boolean, title: String },
};
</script>

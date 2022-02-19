<style>
@media (max-width: 640px) {
  .bar:hover > span,
  .bar:active > span {
    visibility: visible;
  }
}
</style>
<template>
  <div class="bar inline-flex flex-col items-stretch">
    <span class="text-red-500 h-6 text-center invisible sm:visible uppercase">{{
      skipOrWrong
    }}</span>
    <div
      v-if="attempted"
      class="h-4"
      :class="wasRight ? 'bg-green' : 'bg-red-500'"
    ></div>
    <div v-else class="h-4 bg-gray-200"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["skipOrWrong", "wasRight", "attempted"],
};
</script>

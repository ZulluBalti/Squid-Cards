<template>
  <div class="mt-4 progress flex justify-between gap-6">
    <div class="flex-grow grid auto-cols-fr grid-flow-col items-end">
      <ProgressBar
        v-for="item in store"
        :attempted="item.attempted"
        :wasRight="item.wasRight"
        :skipOrWrong="item.skipOrWrong"
      />
    </div>
    <span class="self-end leading-none min-w-fit"
      >{{ this.attempted }} / {{ this.total }}</span
    >
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "QuizProgress",
  props: ["total", "attempted", "store"],
  components: { ProgressBar },
};
</script>

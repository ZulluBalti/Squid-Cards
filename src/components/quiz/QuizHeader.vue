<template>
  <header class="flex justify-between items-center">
    <h1
      class="capitalize text-gray-800 word- font-extrabold text-xl sm:text-4xl"
    >
      Type the correct answer.
    </h1>
    <button class="w-5 h-5 sm:w-6 sm:h-6" @click="this.handleClose">
      <img src="../../assets/close.png" alt="X" />
    </button>
  </header>
  <div
    v-if="showClose"
    class="fixed left-0 top-0 w-full h-screen bg-black opacity-50 z-10"
    @click="this.handleClose"
  ></div>
  <div
    v-if="showClose"
    class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[280px] w-5/6 max-w-[400px] bg-white rounded-lg z-20 p-4"
  >
    <h1 class="text-3xl text-center mb-20">Are you sure?</h1>
    <div class="btns flex justify-between">
      <RouterLink to="/dashboard">
        <Btn title="Yes" />
      </RouterLink>

      <SecondaryBtn title="No" @click="handleClose" />
    </div>
  </div>
</template>

<script>
import Btn from "../Btn.vue";
import SecondaryBtn from "../SecondaryBtn.vue";
export default {
  name: "QuizHeader",
  data() {
    return {
      showClose: false,
    };
  },
  methods: {
    handleClose() {
      this.showClose = !this.showClose;
    },
  },
  components: { Btn, SecondaryBtn },
};
</script>

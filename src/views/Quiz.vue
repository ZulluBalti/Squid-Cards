<template>
  <div class="relative p-2 sm:p-4 min-h-screen">
    <QuizHeaderVue />
    <QuizProgress :total="store.length" :attempted="attempted" :store="store" />
    <QuizBody
      :qNum="this.attempted + 1"
      :question="this.store[this.attempted]"
      @nxtQuestion="this.nxtQuestion"
    />
    <div
      v-if="finish"
      class="p-4 fixed w-full h-screen left-0 top-0 grid place-items-center bg-white"
    >
      <div class="max-w-[500px]">
        <img src="../assets/congrats.png" alt="" />
      </div>
      <h1 class="text-green text-3xl text-center font-bold">
        Congratutation! You've finish the quiz.
      </h1>
      <div class="self-start">
        <RouterLink to="/dashboard">
          <Btn :fullWidth="true" title="Back to dashboard" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import QuizHeaderVue from "../components/quiz/QuizHeader.vue";
import QuizProgress from "../components/quiz/QuizProgress.vue";
import QuizBody from "../components/quiz/QuizBody.vue";
import Btn from "../components/Btn.vue";
import { RouterLink } from "vue-router";

export default {
  name: "Quiz",
  data() {
    return {
      attempted: 0,
      store: [],
      finish: false,
    };
  },
  created() {
    const cards = JSON.parse(localStorage.getItem("cards"));
    if (!cards) this.$router.push("/dashboard");
    const store = [];
    for (let card of Object.keys(cards)) {
      store.push({
        word: card,
        meaning: cards[card],
        wasRight: null,
        skipOrWrong: "",
        attempted: false,
      });
    }
    this.store = store;
  },
  components: { QuizHeaderVue, QuizProgress, QuizBody, Btn },
  methods: {
    nxtQuestion() {
      if (this.attempted + 1 == this.store.length) this.finish = true;
      else this.attempted += 1;
    },
  },
};
</script>

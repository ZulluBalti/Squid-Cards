<style>
.quizBody {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.qCard {
  transition: transform 0ms;
}

.qCard > * {
  position: absolute;
  top: 0;
  left: 0;
}

.qCard > :first-child {
  transform: translateZ(-1px) rotateY(180deg);
}

.qCard.flip {
  transition: transform 300ms;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}
</style>
<template>
  <div class="my-6">
    <h2 class="text-3xl text-gray-700">Question {{ qNum }}</h2>
  </div>
  <section
    class="quizBody flex flex-col items-center gap-6 md:flex-row md:justify-between"
  >
    <div
      class="relative qCard w-[300px] h-[300px]"
      :class="this.question.attempted ? 'flip' : ''"
    >
      <Card
        primaryColor="#5bd599"
        secondaryColor="#88dbb2"
        title="Answer"
        label="The Answer"
        :text="this.question.meaning"
        :isInteractive="false"
        @updateTxt="this.updateQuestion"
      />
      <Card
        primaryColor="#5bd599"
        secondaryColor="#88dbb2"
        title="Question"
        label="The Word"
        :text="this.question.word"
        :isInteractive="false"
        @updateTxt="this.updateQuestion"
      />
    </div>
    <Card
      primaryColor="#5bd599"
      secondaryColor="#88dbb2"
      title="Meaning"
      label="Type your answer"
      :text="userAnswer"
      :isInteractive="!this.question.attempted"
      @updateTxt="this.updateUserAnswer"
    />
    <div class="md:self-stretch w-[300px] flex flex-col justify-between gap-6">
      <div v-if="this.question.attempted">
        <Btn
          :fullWidth="true"
          title="Continue"
          @click="this.$emit('nxtQuestion')"
        />
      </div>
      <div v-else class="btns flex flex-col gap-4">
        <Btn :fullWidth="true" title="Check" @click="this.handleSubmit" />
        <SecondaryBtn :fullWidth="true" title="Skip" @click="this.handleSkip" />
      </div>
      <h3
        v-if="this.question.attempted"
        class="text-2xl text-center md:text-left text-lightBlue font-bold"
      >
        {{ result }}
      </h3>
    </div>
  </section>
</template>

<script>
import Card from "../Card.vue";
import Btn from "../Btn.vue";
import SecondaryBtn from "../SecondaryBtn.vue";
export default {
  name: "QuizBody",
  props: { qNum: Number, question: Object },
  components: { Card, Btn, SecondaryBtn },
  emits: ["nxtQuestion"],
  data() {
    return {
      userAnswer: "",
      result: "",
    };
  },
  methods: {
    updateUserAnswer(e) {
      const { value } = e.target;
      this.userAnswer = value;
    },

    updateQuestion(e) {
      console.log("you can't update the question dummy");
    },

    handleSubmit() {
      if (!this.userAnswer.trim()) {
        this.result = "Answer can't be empty";
        return;
      }

      if (
        this.userAnswer.trim().toLowerCase() ===
        this.question.meaning.trim().toLowerCase()
      ) {
        this.result = "You are awesome";
        this.question.wasRight = true;
      } else {
        this.result = "Try Hard";
        this.question.skipOrWrong = "wrong";
      }

      this.question.attempted = true;
      this.userAnswer = "";
    },

    handleSkip() {
      this.question.attempted = true;
      this.result = "You skipped";
      this.question.skipOrWrong = "skip";
    },
  },
};
</script>

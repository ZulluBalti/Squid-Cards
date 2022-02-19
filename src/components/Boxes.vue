<template>
  <div class="boxes mt-10 flex gap-10 flex-wrap justify-center">
    <Box
      v-for="(noOfCards, index) in this.boxes"
      :activeBox="noOfCards > 0"
      :boxName="'Box ' + (index + 1)"
      :noOfCards="noOfCards"
      @click="noOfCards && takeQuiz()"
    />
  </div>
</template>

<script>
import Box from "./Box.vue";

export default {
  name: "Boxes",
  components: { Box },
  data() {
    return {
      boxes: [],
    };
  },
  created() {
    let cards = JSON.parse(localStorage.getItem("cards"));
    if (!cards) cards = {};
    const store = new Array(5).fill(0);
    store[0] = Object.keys(cards).length;
    this.boxes = store;
  },
  methods: {
    takeQuiz() {
      this.$router.push("/quiz");
    },
  },
};
</script>

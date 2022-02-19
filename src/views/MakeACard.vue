<style>
.container {
  overflow-y: auto;
  max-height: 90vh;
}
</style>
<template>
  <Dashboard :scrollLock="true">
    <div
      class="fixed top-0 left-0 w-full min-h-screen grid place-items-center bg-[#00000055] p-3"
    >
      <div
        class="container w-11/12 max-w-[500px] bg-white p-5 rounded-xl relative shadow-xl -shadow-xl"
      >
        <h1 class="text-center text-2xl text-gray-700 uppercase font-bold">
          Make A Card
        </h1>
        <div class="absolute right-5 top-5 hover:cursor-pointer">
          <RouterLink to="/dashboard">
            <img src="../assets/close.png" alt="X" class="w-[20px]" />
          </RouterLink>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-5 my-4">
          <Card
            title="Front Side"
            primaryColor="#5bd599"
            secondaryColor="#88dbb2"
            label="word"
            :text="this.word"
            @updateTxt="this.wordChange"
          />
          <Card
            title="Back Side"
            primaryColor="#5b97da"
            secondaryColor="#69a0dd"
            label="meaning"
            :text="this.meaning"
            @updateTxt="this.meaningChange"
          />
        </div>
        <button
          class="bg-gradient-to-r from-green to-blue text-white w-full max-w-[300px] rounded p-2 mx-auto block font-bold outline-none disabled:cursor-none"
          @click="saveCard"
          :disabled="this.loading"
          :class="!this.loading && 'active:scale-95 hover:bg-gradient-to-l'"
        >
          <div
            v-if="this.loading"
            class="flex justify-center items-center gap-4"
          >
            <span>
              <img src="../assets/spinner-small.gif" />
            </span>
            <span>Saving...</span>
          </div>
          <div v-else-if="this.success">Saved</div>
          <div v-else-if="this.error">Failed: Try again</div>
          <div v-else>Save</div>
        </button>
      </div>
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import Card from "../components/Card.vue";

scrollTo(0, 0);
export default {
  name: "MakeACard",
  data() {
    return {
      word: "",
      meaning: "",
      loading: false,
      success: false,
      error: false,
    };
  },

  components: { Dashboard, Card },

  methods: {
    wordChange(event) {
      const { value } = event.target;
      this.word = value;
    },

    meaningChange(event) {
      const { value } = event.target;
      this.meaning = value;
    },

    saveCard() {
      const word = this.word.trim();
      const meaning = this.meaning.trim();
      this.toggleLoading();
      this.saveToLocalStorage(word, meaning);
      this.toggleLoading();
      this.successfullySaved();
    },

    saveToLocalStorage(word, meaning) {
      let cards = JSON.parse(localStorage.getItem("cards"));
      if (!cards) cards = {};

      cards[word] = meaning;
      localStorage.setItem("cards", JSON.stringify(cards));
    },

    successfullySaved() {
      this.word = "";
      this.meaning = "";
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 1000);
    },

    toggleLoading() {
      this.loading = !this.loading;
    },
  },
};
</script>

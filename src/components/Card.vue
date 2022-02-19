<style scoped>
textarea::-webkit-scrollbar {
  width: 3px;
  background: rgba(0, 0, 0, 0.05);
}
textarea::-webkit-scrollbar-thumb {
  background: #999;
}

textarea:focus::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>
<template>
  <div
    class="card p-4 w-full max-w-[300px] h-[300px] flex flex-col"
    :style="this.getBg()"
  >
    <h2 class="text-2xl uppercase font-extrabold text-white">{{ title }}</h2>
    <div class="mt-3 flex-grow flex flex-col">
      <label class="text-gray-800" :for="this.label">{{ label }}</label>
      <textarea
        :id="this.label"
        class="outline-none text-black-500 w-full mt-2 bg-transparent border-2 border-slate-300 resize-none focus:border-white flex-grow p-1 text-gray-900"
        :value="this.text"
        v-on:input="(event) => this.$emit('updateTxt', event)"
        :readonly="!this.isInteractive"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    primaryColor: String,
    secondaryColor: String,
    label: String,
    text: String,
    isInteractive: { type: Boolean, default: true },
  },
  emits: ["updateTxt"],
  methods: {
    getBg() {
      return `background: linear-gradient(
                          45deg,
                          ${this.primaryColor},
                          ${this.primaryColor} 35%,
                          ${this.secondaryColor} 35%,
                          ${this.secondaryColor} 65%,
                          ${this.primaryColor} 65%,
                          ${this.primaryColor}
                        );`;
    },
  },
};
</script>

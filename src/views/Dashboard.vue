<script>
import MainHeader from '../components/MainHeader.vue';
import SignUpBtn from '../components/SignUpBtn.vue';
import Boxes from '../components/Boxes.vue';

export default {
  name: "Dashboard",
  props: ['scrollLock'],
  components: { MainHeader, SignUpBtn, Boxes },
  methods: {
    shouldOverflow() {
      return `max-height: 100vh; overflow-y: ${this.scrollLock ? 'hidden' : 'auto'}`
    }
  }
}
</script>
<template>
  <div class="p-4 lg:p-8 min-h-screen relative" :style="this.shouldOverflow()">
    <MainHeader>
      <SignUpBtn />
    </MainHeader>

    <h1
      class="text-center capitalize text-3xl mt-10 font-extrabold text-gray-700"
    >Welcome to the dashboard</h1>
    <Boxes />
    <div class="mt-10 flex justify-center">
      <RouterLink to="/dashboard/make-a-card">
        <button
          class="bg-green mx-auto hover:bg-lightGreen p-2 w-[300px] text-xl uppercase text-white flex gap-1 items-center justify-center rounded"
        >
          <span>Add a card</span>
          <span class="text-3xl font-semibold">+</span>
        </button>
      </RouterLink>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import MainHeader from "../components/MainHeader.vue";
import SignUpBtn from "../components/SignUpBtn.vue";
import Btn from "../components/Btn.vue";

export default {
  name: "LandingPage",
  components: {
    MainHeader,
    SignUpBtn,
    Btn,
  },
};
</script>

<template>
  <div class="landing-page flex flex-col h-screen p-4 lg:p-8">
    <MainHeader>
      <SignUpBtn />
    </MainHeader>

    <main class="flex-1 flex items-center justify-end md:pr-20">
      <div class="md:w-3/5">
        <h1 class="text-3xl font-extrabold text-gray-800 capitalize">
          A unique way to increase your
          <span class="text-green-500 font-extrabold">Vocabulary.</span>
        </h1>
        <p class="my-8 leading-7">
          Squid Cards is an app used to memorize vocabulary in a foreign
          language. It's based upon space repetition technique. User creates
          cards and it will be automatically put to different boxes. Which
          access is restricted.
        </p>

        <RouterLink to="/dashboard">
          <Btn title="Get Started" />
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<style>
@media (min-width: 800px) {
  .landing-page {
    background: url(../assets/landing-bg.png) no-repeat;
    background-position: 5% 55%;
    background-size: 30%;
  }
}
</style>

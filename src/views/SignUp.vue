<script>
import { RouterLink } from "vue-router";
export default {
  name: "SignUp",
};
</script>
<template>
  <div class="h-screen flex justify-center items-center bg-black">
    <div
      class="relative login-container rounded-xl flex flex-col justify-center items-center bg-white p-4"
    >
      <div
        class="absolute top-5 left-8 rounded-full bg-black w-[40px] h-[40px]"
      ></div>
      <div
        class="absolute bottom-5 left-8 rounded-full bg-black w-[40px] h-[40px]"
      ></div>
      <div
        class="absolute top-5 right-8 rounded-full bg-black w-[40px] h-[40px]"
      ></div>
      <div
        class="absolute bottom-5 right-8 rounded-full bg-black w-[40px] h-[40px]"
      ></div>

      <h1
        class="headline bg-blue-200 font-extrabold text-3xl text-gray-800 p-3"
      >
        Sign in to
        <span class="text-green-500 font-extrabold">Squid</span>
        <span class="text-blue-500 font-extrabold">Card</span>.
      </h1>
      <p class="my-7">Sign in to continue</p>

      <div class="flex flex-col btns">
        <button class="flex items-center justify-center">
          <img
            class="w-[20px] h-[20px]"
            src="../assets/icons/google-logo.png"
          />
          <span class="text-base font-medium ml-4 text-gray-700"
            >Continue with Google</span
          >
        </button>
        <button class="my-4 flex items-center justify-center">
          <img
            class="w-[20px] h-[20px]"
            src="../assets/icons/facebook-logo.png"
          />
          <span class="text-base font-medium ml-4 text-gray-700"
            >Continue with Facebook</span
          >
        </button>
        <RouterLink to="/">
          <button class="back mt-6 bg-red-500 hover:bg-red-400 text-white">
            Back
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: clamp(300px, 80%, 700px);
  height: 70%;
}

.btns button {
  padding: 0.5rem;
  border: 1px solid gray;
}
.btns button:hover {
  background: rgba(0, 0, 255, 0.5);
  color: white;
}

.btns button:hover span {
  color: white;
}
.back {
  width: 100%;
}

@media (max-width: 500px) {
  h1.headline {
    font-size: 1.6rem;
  }
}
</style>

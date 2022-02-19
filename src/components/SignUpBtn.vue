<template>
  <RouterLink to="/signup">
    <span
      class="inline-block text-center w-[90px] border-2 border-green rounded text-green p-2"
      >Sign Up</span
    >
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "SignUpBtn",
};
</script>

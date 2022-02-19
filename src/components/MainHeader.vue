<template>
  <header class="flex justify-between items-center">
    <RouterLink to="/">
      <div class="w-[200px] md:w-[300px]">
        <img src="../assets/logo.png" alt="Squid Cards" />
      </div>
    </RouterLink>
    <slot></slot>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: "MainHeader"
}
</script>

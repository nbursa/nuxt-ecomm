<template>
  <div class="w-screen h-screen flex flex-col overflow-hidden">
    <NavBar />
    <main class="h-full flex-grow overflow-y-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
</script>

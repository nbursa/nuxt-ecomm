<template>
  <div>
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
</script>

<template>
  <div class="w-screen h-screen overflow-hidden flex flex-col">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

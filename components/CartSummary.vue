<template>
  <div class="border-t pt-4 mt-4">
    <div class="flex justify-between items-center mb-4">
      <span class="text-lg font-semibold">Total:</span>
      <span class="text-xl font-bold">${{ totalPrice }}</span>
    </div>
    <button
      class="w-full px-6 py-2 font-semibold rounded text-black border border-black hover:text-white hover:bg-black"
    >
      Proceed to Checkout
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ totalPrice: string }>();
</script>

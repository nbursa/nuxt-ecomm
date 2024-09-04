<template>
  <NuxtLink
    :to="`product/${item.id}`"
    class="flex items-center justify-between border-b pb-4 mb-4"
  >
    <img
      :src="item.image"
      alt="Product Image"
      class="w-16 h-16 object-cover rounded"
    />
    <div class="flex-1 ml-4">
      <h2 class="text-lg font-semibold">{{ item.title }}</h2>
      <div class="flex items-center mt-2">
        <input
          type="number"
          v-model="quantity"
          class="border border-gray-300 rounded w-16 text-center"
          @change.prevent="updateQuantity"
          @click.prevent="updateQuantity"
        />
        <span class="ml-4 text-gray-600">{{ item.price }}</span>
      </div>
    </div>
    <button @click.prevent="removeItem" class="text-red-600 hover:underline">
      Remove
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "~/types";

const props = defineProps<{ item: Product }>();
const emits = defineEmits(["remove", "updateQuantity"]);

const quantity = ref(props.item.quantity);

const updateQuantity = () => {
  emits("updateQuantity", props.item.id, quantity.value);
};

const removeItem = () => {
  emits("remove", props.item.id);
};
</script>

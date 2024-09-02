<template>
  <div class="mb-6">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search products..."
      class="border border-gray-400 bg-white text-black p-2 rounded w-full mb-4 focus:outline-none"
      @input="updateFilters"
    />

    <div class="mb-4">
      <label class="block font-semibold mb-2"> Filter by Category </label>
      <select
        v-model="selectedCategory"
        @change="updateFilters"
        class="border border-gray-400 bg-white text-black p-2 rounded w-full mb-4 focus:outline-none"
      >
        <option value="">All Categories</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
          class="text-black bg-white"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <div>
      <label class="block font-semibold mb-2 text-black">
        Filter by Price
      </label>
      <input
        type="range"
        v-model="selectedPrice"
        :min="minPrice"
        :max="maxPrice"
        @input="updateFilters"
        class="w-full cursor-pointer accent-black"
      />
      <div class="flex justify-between text-sm text-black">
        <span>${{ minPrice }}</span>
        <span>${{ selectedPrice }}</span>
        <span>${{ maxPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const props = defineProps({
  categories: Array as () => string[],
  minPrice: Number,
  maxPrice: Number,
});

const emits = defineEmits(["update"]);

const searchQuery = ref("");
const selectedCategory = ref("");
const selectedPrice = ref(props.maxPrice || 100);

const updateFilters = () => {
  emits("update", {
    searchQuery: searchQuery.value,
    selectedCategory: selectedCategory.value,
    selectedPrice: selectedPrice.value,
  });
};
</script>

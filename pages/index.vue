<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6 text-center">Digital Products</h1>

    <ProductSearch
      :categories="categories"
      :minPrice="minPrice"
      :maxPrice="maxPrice"
      @update="applyFilters"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      <NuxtLink
        v-for="product in filteredProducts"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="border rounded-lg shadow-md overflow-hidden"
      >
        <img
          :src="product.image"
          alt="Product Image"
          class="w-full h-48 object-cover"
        />

        <div class="p-4">
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <p class="text-gray-700 mt-2">{{ product.description }}</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-lg font-bold text-primary">{{
              product.price
            }}</span>
            <NuxtLink
              :to="`/products/${product.id}`"
              class="text-secondary hover:underline"
              >View Details</NuxtLink
            >
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { products } from "~/data";
import ProductSearch from "~/components/ProductSearch.vue";

const categories = ["E-Books", "Templates", "Photos"];
const minPrice = 10;
const maxPrice = 100;

const searchQuery = ref("");
const selectedCategory = ref("");
const selectedPrice = ref(maxPrice);

const applyFilters = (filters: {
  searchQuery: string;
  selectedCategory: string;
  selectedPrice: number;
}) => {
  searchQuery.value = filters.searchQuery;
  selectedCategory.value = filters.selectedCategory;
  selectedPrice.value = filters.selectedPrice;
};

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesSearchQuery = product.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value
      ? product.description.includes(selectedCategory.value)
      : true;
    const matchesPrice =
      parseFloat(product.price.replace("$", "")) <= selectedPrice.value;

    return matchesSearchQuery && matchesCategory && matchesPrice;
  });
});
</script>

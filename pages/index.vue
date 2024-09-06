<template>
  <div class="p-8 lg:max-w-6xl lg:mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center">Digital Products</h1>

    <ProductSearch
      :categories="categories"
      :minPrice="minPrice"
      :maxPrice="maxPrice"
      @update="applyFilters"
    />

    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 overflow-y-auto"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="border rounded-lg shadow-md overflow-hidden"
      >
        <NuxtLink :to="`/product/${product.id}`" class="block">
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
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { products } from "~/data";
import ProductSearch from "~/components/ProductSearch.vue";
import type { Product } from "~/types";

const categories = ["E-Books", "Templates", "Photos"];
const minPrice = 10;
const maxPrice = 100;

const searchQuery = ref<string>("");
const selectedCategory = ref<string>("");
const selectedPrice = ref<number>(maxPrice);

const applyFilters = (filters: {
  searchQuery: string;
  selectedCategory: string;
  selectedPrice: number;
}) => {
  searchQuery.value = filters.searchQuery;
  selectedCategory.value = filters.selectedCategory;
  selectedPrice.value = filters.selectedPrice;
};

const filteredProducts = computed<Product[]>(() => {
  return products.filter((product) => {
    const matchesSearchQuery = product.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value
      ? product.description?.includes(selectedCategory.value) ?? false
      : true;
    const matchesPrice =
      parseFloat(product.price.replace("$", "")) <= selectedPrice.value;

    return matchesSearchQuery && matchesCategory && matchesPrice;
  });
});

useHead({
  title: "Products",
  meta: [{ name: "description", content: "Products page." }],
  bodyAttrs: {
    class: "products",
  },
  script: [{ innerHTML: "console.log('Hello products!')" }],
});
</script>

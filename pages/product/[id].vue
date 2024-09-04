<template>
  <div class="p-8">
    <div class="flex flex-col md:flex-row">
      <img
        v-if="product"
        :src="product.image"
        alt="Product Image"
        class="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md"
      />

      <div v-else>
        <h1 class="text-2xl font-bold">Product not found</h1>
      </div>

      <div v-if="product" class="md:ml-8 mt-6 md:mt-0">
        <h1 class="text-3xl font-bold">{{ product.title }}</h1>
        <p class="text-gray-700 mt-4">{{ product.description }}</p>
        <span class="text-xl font-bold text-primary mt-6 block">{{
          product.price
        }}</span>

        <div class="flex gap-6">
          <button
            class="mt-4 px-6 py-2 bg-primary border border-black font-semibold rounded hover:bg-black hover:text-white"
            @click="addToCart"
          >
            Add To Cart
          </button>

          <NuxtLink to="/cart">
            <button
              class="mt-4 px-6 py-2 bg-primary border border-black font-semibold rounded hover:bg-black hover:text-white"
            >
              View Cart
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCart } from "~/composables/useCart";
import { products } from "~/data";
import type { Product } from "~/types";

const route = useRoute();
const router = useRouter();

const { addItem } = useCart();

const product = computed<Product | undefined>(() => {
  const id = parseInt(route.params.id as string, 10);
  return products.find((p) => p.id === id);
});

const addToCart = () => {
  if (product.value) {
    addItem({
      ...product.value,
      quantity: 1,
    });

    // router.push("/cart");
  }
};

useHead({
  title: `Product ${product.value?.title}`,
  meta: [
    { name: "description", content: `Product ${product.value?.title} page.` },
  ],
  bodyAttrs: {
    class: "product",
  },
  script: [
    { innerHTML: `console.log("Hello ${product.value?.title} product!")` },
  ],
});
</script>

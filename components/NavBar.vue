<template>
  <nav class="bg-white border-b border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-black"
          >eComm</span
        >
      </a>

      <!-- Mobile menu button -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        :class="['w-full md:block md:w-auto', { hidden: !menuOpen }]"
        id="navbar-default"
      >
        <ul
          class="flex flex-col md:flex-row md:space-x-8 mt-4 font-medium md:mt-0 md:border-0 bg-white md:bg-transparent border border-gray-100 rounded-lg"
        >
          <li>
            <NuxtLink
              to="/"
              class="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
              aria-current="page"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/cart"
              class="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
            >
              Cart ({{ cartItemCount }})
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCart } from "~/composables/useCart";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const { cartItems } = useCart();
const cartItemCount = computed(() =>
  cartItems.value.reduce((total, item) => total + item.quantity, 0)
);
</script>

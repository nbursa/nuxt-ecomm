<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6 text-center">Checkout</h1>

    <h2 class="text-2xl font-semibold mb-4">Billing Information</h2>
    <div class="mb-8 rounded-md border border-black p-4">
      <form @submit.prevent="submitCheckout">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Full Name</label
            >
            <input
              type="text"
              id="name"
              v-model="billingInfo.name"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email Address</label
            >
            <input
              type="email"
              id="email"
              v-model="billingInfo.email"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="address" class="block text-sm font-medium text-gray-700"
              >Address</label
            >
            <input
              type="text"
              id="address"
              v-model="billingInfo.address"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="city" class="block text-sm font-medium text-gray-700"
              >City</label
            >
            <input
              type="text"
              id="city"
              v-model="billingInfo.city"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="postalCode"
              class="block text-sm font-medium text-gray-700"
              >Postal Code</label
            >
            <input
              type="text"
              id="postalCode"
              v-model="billingInfo.postalCode"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
      </form>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
      <div class="bg-white border border-black rounded-lg p-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex justify-between mb-4"
        >
          <div>
            <h3 class="text-lg font-medium">{{ item.title }}</h3>
            <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
          </div>
          <p class="text-lg font-medium">{{ item.price }}</p>
        </div>
        <div class="flex justify-between border-t pt-4 mt-4">
          <p class="text-lg font-medium">Total</p>
          <p class="text-lg font-bold">$ {{ totalPrice }}</p>
        </div>
      </div>
    </div>

    <!-- Payment Button -->
    <button
      @click="submitCheckout"
      class="w-full bg-primary font-semibold hover:text-white p-2 rounded-md border border-black hover:bg-black"
    >
      Proceed to Payment
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCart } from "~/composables/useCart";

const billingInfo = ref({
  name: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
});

const { cartItems, totalPrice } = useCart();

const submitCheckout = () => {
  console.log("Checkout submitted:", billingInfo.value);
};

useHead({
  title: "Checkout",
  meta: [{ name: "description", content: "Checkout page." }],
  bodyAttrs: {
    class: "checkout",
  },
  script: [{ innerHTML: "console.log('Checkout page loaded')" }],
});
</script>

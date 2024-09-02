<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Your Shopping Cart</h1>

    <div v-if="cartItems.length > 0" class="grid grid-cols-1 gap-6 mb-8">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        @remove="removeItem"
        @updateQuantity="updateItemQuantity"
      />
    </div>

    <div v-else>
      <p>Your cart is currently empty.</p>
    </div>

    <CartSummary :totalPrice="totalPrice" />
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~/composables/useCart";
import CartItem from "../components/CartItem.vue";
import CartSummary from "../components/CartSummary.vue";

const { cartItems, removeItem, updateItemQuantity, totalPrice } = useCart();
</script>

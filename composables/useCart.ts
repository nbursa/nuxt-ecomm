import { ref, computed } from "vue";
import type { Product } from "~/types";

const cartItems = ref<Product[]>([]);

export function useCart() {
  const addItem = (item: Product) => {
    const existingItem = cartItems.value.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartItems.value.push({ ...item, quantity: item.quantity });
    }
  };

  const removeItem = (itemId: number) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
  };

  const updateItemQuantity = (itemId: number, quantity: number) => {
    const item = cartItems.value.find((item) => item.id === itemId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    } else if (item && quantity === 0) {
      removeItem(itemId);
    }
  };

  const totalPrice = computed(() => {
    return cartItems.value
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      )
      .toFixed(2);
  });

  return {
    cartItems,
    addItem,
    removeItem,
    updateItemQuantity,
    totalPrice,
  };
}

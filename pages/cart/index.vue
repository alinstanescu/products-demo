<template>
  <h1 class="mt-4">Your cart items</h1>
  <ul class="list-group">
    <li
      v-for="(product, index) in cartStore.cart"
      :key="index"
      class="list-group-item"
    >
      <nuxt-link :to="'/product/' + product.id">
        <nuxt-img :src="product.image" width="auto" height="50" />
      </nuxt-link>
      <span class="m-2">{{ product.name }}</span>
      <span class="m-2">{{ product.size }}</span>
      <span class="m-2">{{ product.price }} DKK</span>
      <span
        class="badge text-bg-danger hover-hand float-end"
        @click="removeProductFromCart(product.id)"
        >Remove Product</span
      >
    </li>
  </ul>
</template>
<script setup>
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

const removeProductFromCart = (id) => {
  cartStore.removeProductFromCart(id);
};

useHead({
  title: "Cart Items",
});
</script>
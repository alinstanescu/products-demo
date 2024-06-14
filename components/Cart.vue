<template>
  <ul class="list-group">
    <li
      v-for="(product, index) in cartStore.cart"
      :key="index"
      class="list-group-item row"
    >
      <nuxt-link :to="'/product/' + product.id">
        <nuxt-img :src="product.image" width="auto" height="50" class="col" />
      </nuxt-link>
      <span class="col">{{ product.name }}</span>
      <span class="col">{{ product.size }}</span>
      <span class="col">{{ product.price }} DKK</span>
      <span
        class="hover-hand badge text-bg-danger col"
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
</script>
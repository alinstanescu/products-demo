<template>
  <button
    @click="
      () => {
        addToCart(product);
      }
    "
    type="button"
    class="btn btn-success btn-sm"
  >
    Add to cart
  </button>
  <nuxt-link type="button" class="btn btn-success mx-2 btn-sm" to="/cart"
    >View Cart</nuxt-link
  >
</template>

<script setup>
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

const addToCart = (product) => {
  const cartProduct = {
    id: product.id,
    name: product.name.dk || product.name.en,
    price: product.price,
    size: "not implemented",
    color: "not implemented",
    image: product.images?.length ? product.images[0] : 'https://placehold.co/400x532.jpg',
  };
  cartStore.addToCart(cartProduct);
  useNuxtApp().$toast(`${cartProduct.name} added to your Cart!`, {
    type: "success",
    position: "top-left",
    transition: "slide",
    dangerouslyHTMLString: true,
  });
};
const props = defineProps({
  product: Object,
});
</script>

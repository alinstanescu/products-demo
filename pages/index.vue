<template>
  <div class="row">
    <h1 class="my-4 text-center">Product Listing</h1>
    <search />
  </div>
</template>

<script setup>
import { useProductStore } from "@/store/products";

const productStore = useProductStore();
const products = productStore.products;
</script>
<style>
.hover-hand:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
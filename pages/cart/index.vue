<template>
  <h1 class="mt-4">Your cart items</h1>
  <cart />
  <div class="row">
    <div class="col text-center">
      <nuxt-link to="/checkout" class="w-50 btn btn-primary btn-lg mt-2">
        Continue to checkout
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Cart Items",
});
</script>
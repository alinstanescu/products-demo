<template>
  <ul>
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </ul>
</template>

<script setup>
import { useProductStore } from "@/store/products";
import CategoryItem from "./CategoryItem.vue";

const productStore = useProductStore();
const categories = productStore.categories.categories;
</script>

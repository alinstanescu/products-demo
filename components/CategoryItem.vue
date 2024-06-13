<template>
  <li>
    <div>
      <p
        @click="showSubcategories = !showSubcategories"
        class="hover-hand link-dark"
      >
        {{ category.name.en || category.name.dk }}
        {{
          category.categories?.length
            ? `(${category.categories.length})`
            : null
        }}
      </p>
      <div v-if="category.categories && category.categories.length">
        <ul class="menuSubcategory" v-show="showSubcategories">
          <CategoryItem
            v-for="subCategory in category.categories"
            :key="subCategory.id"
            :category="subCategory"
          />
        </ul>
      </div>
    </div>
  </li>
</template>

<script setup>
import CategoryItem from "./CategoryItem.vue";

let showSubcategories = ref(false);

const props = defineProps({
  category: Object,
});
</script>
<style scoped>
ul.menuSubcategory {
  padding-left: 12px;
}

li {
  list-style: square;
}

</style>

<template>
  <div class="container">
    <input
      v-model="query"
      class="form-control my-3"
      placeholder="Search products..."
    />
    <div class="row">
      <div
        class="col-sm-6 col-lg-4"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div class="card mb-4">
          <div
            :id="`carouselExampleIndicators-${product.id}`"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item"
                v-for="(image, index) in product.images || [imagePlaceholder]"
                :class="{ active: index === 0 }"
                :key="image"
              >
                <NuxtImg
                  :src="image"
                  class="d-block w-100 card-img-top"
                  :alt="product.name.en || product.name.dk"
                  loading="lazy"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              :data-bs-target="`#carouselExampleIndicators-${product.id}`"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              :data-bs-target="`#carouselExampleIndicators-${product.id}`"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="card-body">
            <p class="card-text">{{ product.name.en || product.name.dk }}</p>
            <div class="">
              <p class="badge rounded-pill text-bg-dark">
                {{ product.price }} DKK
              </p>
              <div class="mb-2">
                <add-to-cart :product="product" />
              </div>
            </div>
            <div class="d-grid">
              <nuxt-link
                :to="'/product/' + product.id"
                class="btn btn-primary btn-sm"
                >View Details</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProductStore } from "@/store/products";

const query = ref("");
const productStore = useProductStore();
const products = productStore.products;
const imagePlaceholder = "https://placehold.co/400x532.jpg";

const filteredProducts = computed(() => {
  const lowerCaseQuery = query.value.toLowerCase();
  return products.filter(
    (product) =>
      product.name.en?.toLowerCase().includes(lowerCaseQuery) ||
      product.name.dk?.toLowerCase().includes(lowerCaseQuery) ||
      product.categories?.includes(lowerCaseQuery)
  );
});
</script>

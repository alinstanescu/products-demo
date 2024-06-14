<template>
  <div class="container">
    <div class="row">
      <h1 class="my-4">{{ product.name.en || product.name.dk }}</h1>
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade col-12 col-md-6"
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
              class="d-block w-100"
              :alt="product.name.en || product.name.dk"
              loading="lazy"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="col-12 col-md-6">
        <p>{{ product.price }} DKK</p>
        <div v-if="!product.variant">
          <p>Stock: {{ product.stock }} stk.</p>
          <div class="d-flex justify-content-start">
            <span>sizes: </span>
            <span
              v-for="size in product.size"
              :key="size"
              class="badge rounded-pill text-bg-secondary m-1"
              >{{ size }}</span
            >
          </div>
          <p>Colors: {{ product.color }}</p>
        </div>

        <div v-else>
          <div v-for="variant in product.variant" :key="variant.color">
            <div class="d-flex justify-content-start">
              <span>color: {{ variant.color }}</span>

              <span
                v-for="size in variant.size"
                :key="size"
                class="badge rounded-pill text-bg-secondary m-1"
                >{{ size }}</span
              >
            </div>
          </div>
        </div>
        <add-to-cart :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/store/products";
import { useRoute } from "vue-router";

const route = useRoute();
const productStore = useProductStore();
const product = productStore.products.find((p) => p.id == route.params.id);
const imagePlaceholder = "https://placehold.co/400x532.jpg";

useHead({
  title: product.name.en || product.name.dk,
});
</script>

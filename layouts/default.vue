<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3 col-xl-2 pt-4">
        <nuxt-link to="/">
          <NuxtImg src="https://via.ritzau.dk/data/images/00952/9206bf8c-624b-4411-a9fa-1e2983b84a44-w_300_h_100.png" alt="Bestseller logo" width="80%" height="auto" />
        </nuxt-link>
      
        <category-menu class="my-2" />
      </div>
      <div class="col">
        <slot />
      </div>
    </div>
  </div>
</template>

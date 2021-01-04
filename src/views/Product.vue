<template>
  <Navigation>
    <template v-slot:default>
      Detail
    </template>
    <template v-slot:right>
      <router-link
        to="/"
        class="py-4 px-6 mr-2 border bg-white text-xl capitalize hover:bg-gray-100"
      >
        Go Back
      </router-link>
      <router-link
        to="/result"
        class="py-4 px-6 border bg-white text-xl capitalize hover:bg-gray-100"
      >
        Finish
      </router-link>
    </template>
  </Navigation>
  <ProductDetail />
</template>

<script>
import Navigation from '@/components/Navigation';
import ProductDetail from '@/components/ProductDetail';

export default {
  name: 'Product',
  components: {
    Navigation,
    ProductDetail
  }
};
</script>

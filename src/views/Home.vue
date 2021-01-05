<template>
  <div>
    <Navigation>
      Dashboard
    </Navigation>

    <div class="text-center mt-16">
      <h1 class="text-2xl">Lorum Ipsum</h1>
      <p class="mt-2">Select one of the items bellow to know more details.</p>
    </div>
    <ProductList class="mt-16" />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import ProductList from '@/components/ProductList';

export default {
  name: 'Home',
  components: {
    Navigation,
    ProductList
  }
};
</script>

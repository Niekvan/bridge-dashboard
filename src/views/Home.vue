<template>
  <div class="text-center">
    <h1 class="text-4xl">Lorum Ipsum</h1>
    <p class="mt-2">Select one of the items bellow to know more details.</p>
  </div>
  <ProductList class="mt-10" />
</template>

<script>
import ProductList from '@/components/ProductList';

export default {
  name: 'Home',
  components: {
    ProductList
  }
};
</script>

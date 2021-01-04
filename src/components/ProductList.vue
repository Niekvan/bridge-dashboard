<template>
  <div class="flex justify-between">
    <ProductPreview
      :key="product.id"
      v-for="product in products"
      :product="product"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import ProductPreview from '@/components/ProductPreview';
import { computed, onMounted } from 'vue';

export default {
  name: 'ProductList',
  components: {
    ProductPreview
  },

  setup() {
    const store = useStore();

    const products = computed(() => store.state.products.records);

    const loadProducts = () => store.dispatch('products/load');

    onMounted(() => {
      loadProducts();
    });

    return {
      products
    };
  }
};
</script>

<style></style>

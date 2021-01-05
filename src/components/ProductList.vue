<template>
  <div class="flex justify-between">
    <template v-if="loadingProducts">
      <ProductPreview
        :key="product"
        v-for="product in 3"
        :product="{}"
        :loading="true"
      />
    </template>
    <template v-else>
      <ProductPreview
        :key="product.id"
        v-for="product in products"
        :product="product"
      />
    </template>
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
    const loadingProducts = computed(() => products.value.length === 0);

    const loadProducts = () => store.dispatch('products/load');

    onMounted(() => {
      loadProducts();
    });

    return {
      products,
      loadingProducts
    };
  }
};
</script>

<style></style>

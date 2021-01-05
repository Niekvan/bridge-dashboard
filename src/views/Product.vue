<template>
  <div>
    <Navigation>
      <template v-if="product" v-slot:default>{{ product.title }}</template>
      <template v-else v-slot:default
        ><div class="w-40 h-4 bg-gray-300 animate-pulse"></div
      ></template>
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
    <ProductDetail :product="product" />
  </div>
</template>

<script>
import { useStore } from 'vuex';

import Navigation from '@/components/Navigation';
import ProductDetail from '@/components/ProductDetail';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Product',
  components: {
    Navigation,
    ProductDetail
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const product = ref(null);

    const getProduct = () =>
      store.dispatch('products/loadProduct', route.params.id);

    onBeforeMount(async () => {
      product.value = await getProduct();
    });

    return {
      product
    };
  }
};
</script>

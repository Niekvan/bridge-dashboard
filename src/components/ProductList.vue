<template>
  <div>Product List</div>
  <div>
    <ProductPreview />
  </div>
</template>

<script>
import { useStore } from "vuex";
import ProductPreview from "@/components/ProductPreview";
import { onMounted } from "vue";

export default {
  name: "ProductList",
  components: {
    ProductPreview
  },

  setup() {
    const store = useStore();

    const loadProducts = () => store.dispatch("products/load");

    onMounted(() => {
      loadProducts();
    });
  }
};
</script>

<style></style>

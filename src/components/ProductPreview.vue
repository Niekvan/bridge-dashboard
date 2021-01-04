<template>
  <router-link
    :to="`/product/${product.id}`"
    class="mx-5 p-10 bg-white text-center text-xs uppercase border"
  >
    <div class="w-56 h-56">
      <img
        class="object-contain h-full w-full transform transition-transform duration-300 hover:scale-110"
        :src="product.image"
        :alt="product.description"
      />
    </div>
    <p data-test="product" class="w-48 mx-4 mt-8">{{ product.title }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'ProductPreview',

  props: {
    product: {
      required: true,
      type: Object
    }
  }
};
</script>

<style></style>

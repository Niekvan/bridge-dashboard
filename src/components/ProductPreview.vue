<template>
  <router-link
    :to="`/product/${product.id}`"
    class="m-5 w-52 bg-white text-center text-xs uppercase hover:underline"
  >
    <div class="w-52 h-52">
      <img
        class="object-contain h-full w-full transform transition-transform duration-300 hover:scale-110"
        :src="product.image"
        :alt="product.description"
      />
    </div>
    <p data-test="product" class="w-full px-4 mt-8">{{ product.title }}</p>
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

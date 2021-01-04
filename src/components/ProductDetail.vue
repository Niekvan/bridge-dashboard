<template>
  <div class="w-full my-24">
    <img
      class="w-full max-h-72 object-contain"
      :src="product.image"
      :alt="product.title"
    />
    <p class="text-2xl mt-10">{{ product.description }}</p>
    <div class="flex mt-24">
      <img
        class="w-1/2 max-h-72 object-contain"
        :src="product.image"
        :alt="product.title"
      />
      <img
        class="w-1/2 max-h-72 object-contain"
        :src="product.image"
        :alt="product.title"
      />
    </div>
    <p class="text-2xl mt-10">{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    product: {
      required: true,
      type: Object
    }
  }
};
</script>

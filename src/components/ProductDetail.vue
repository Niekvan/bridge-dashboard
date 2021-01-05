<template>
  <transition name="fade" mode="out-in">
    <div key="loading" v-if="!product" class="w-full my-24 animate-pulse">
      <div class="w-full h-72 bg-gray-300"></div>
      <div class="w-4/5 h-4 mt-4 bg-gray-300"></div>
      <div class="w-4/6 h-4 mt-2 bg-gray-300"></div>
      <div class="w-3/5 h-4 mt-2 bg-gray-300"></div>
      <div class="w-4/6 h-4 mt-2 bg-gray-300"></div>
      <div class="w-2/5 h-4 mt-2 bg-gray-300"></div>
    </div>
    <div key="product" v-else class="w-full my-24">
      <img
        class="w-full max-h-72 object-contain lazyload"
        :src="product.image"
        :alt="product.title"
      />
      <p class="text-2xl mt-10">{{ product.description }}</p>
      <div class="flex mt-24">
        <img
          class="w-1/2 max-h-72 object-contain lazyload"
          :src="product.image"
          :alt="product.title"
        />
        <img
          class="w-1/2 max-h-72 object-contain lazyload"
          :src="product.image"
          :alt="product.title"
        />
      </div>
      <p class="text-2xl mt-10">{{ product.description }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    product: {
      type: Object
    }
  }
};
</script>

<template>
  <transition name="fade" mode="out-in">
    <div key="loading" v-if="loading">
      <div
        class="animate-pulse m-5 w-52 h-52 flex flex-col justify-center items-center"
      >
        <div class="w-40 h-40 bg-gray-300"></div>
        <div class="w-40">
          <div class="w-36 h-4 mt-4 bg-gray-300"></div>
          <div class="w-32 h-4 mt-1 bg-gray-300"></div>
        </div>
      </div>
    </div>
    <router-link
      v-else
      key="link"
      :to="`/product/${product.id}`"
      class="m-5 w-52 bg-white text-center text-xs uppercase hover:underline"
    >
      <div class="w-52 h-52">
        <img
          class="object-contain h-full w-full transform transition-transform duration-300 hover:scale-110 lazyload"
          :data-src="product.image"
          :alt="product.description"
        />
      </div>
      <p data-test="product" class="w-full px-4 mt-8">{{ product.title }}</p>
    </router-link>
  </transition>
</template>

<script>
export default {
  name: 'ProductPreview',

  props: {
    product: {
      required: true,
      type: Object
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

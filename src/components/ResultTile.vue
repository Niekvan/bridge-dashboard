<template>
  <router-link :to="data.link">
    <div class="w-60 h-56 border flex flex-col justify-center items-center">
      <div class="w-16" v-html="data.icon" />
      <p class="mt-5">{{ data.title }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ResultTile',
  props: {
    data: {
      required: true,
      type: Object
    }
  }
};
</script>

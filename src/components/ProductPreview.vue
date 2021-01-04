<template>
  <div data-test="product">{{ product.title }}</div>
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

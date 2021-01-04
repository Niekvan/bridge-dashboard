<template>
  <div class="py-8 grid grid-cols-1 grid-rows-1 items-center">
    <router-link
      to="/"
      class="h-12 justify-self-start row-start-1 row-span-1 col-start-1 col-span-1"
    >
      <img class="h-full" src="../assets/img/bridge.png" alt="Bridge logo" />
    </router-link>
    <h1
      class="justify-self-center row-start-1 row-span-1 col-start-1 col-span-1 text-2xl"
    >
      <slot />
    </h1>
    <div class="justify-self-end row-start-1 row-span-1 col-start-1 col-span-1">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

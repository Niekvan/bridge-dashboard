<template>
  <div class="mx-auto max-w-screen-lg">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  setup() {
    const enter = e => {
      console.log(e);
    };
    const leave = e => {
      console.log(e);
    };

    return {
      enter,
      leave
    };
  }
};
</script>

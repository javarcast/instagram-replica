<template>
  <header-bar></header-bar>
  <main>
    <router-view ></router-view>
  </main>
  <footer-bar></footer-bar>
</template>
<script>
import HeaderBar from '@/components/header/Index.vue';
import FooterBar from '@/components/footer/Index.vue';

export default {
  name: 'DefaultLayout',
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>
<style scoped>
  main {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>

<template>
  <section class="wrapper">
    <div class="content-wrapper">
      <histories-bar></histories-bar>
      <content-card></content-card>
    </div>
    <aside class="sugerences-wrapper">
      <div>
        <h1>hola</h1>
      </div>
    </aside>
  </section>
</template>
<script>
import HistoriesBar from '@/views/home/HistoriesBar.vue';
import ContentCard from '@/views/home/ContentCard.vue';

export default {
  name: 'HistoriesItem',
  components: {
    HistoriesBar,
    ContentCard,
  },
};
</script>
<style scoped>
  .wrapper {
    max-width: 975px;
    margin-right: 28px;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    flex-flow: row nowrap;
  }
  .content-wrapper{
    float: left;
    margin-right: 28px;
    max-width: 614px;
    width: 100%;
    float: left;
  }

  .sugerences-wrapper {
    max-width: 293px;
    width: 100%;
    height: 100vh;
    position: sticky;
  }
</style>

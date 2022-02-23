<template>
  <div class="histories-wrapper">
    <history-item v-for="history of histories" :history="history"
     :key="history.name"></history-item>
  </div>
</template>
<script>
import HistoryItem from '@/views/home/HistoryItem.vue';

export default {
  name: 'HistoriesBar',
  data() {
    return {
      histories: [
        {
          name: 'usuario1',
          image: 'person.png',
        },
        {
          name: 'usuario2',
          image: 'person2.png',
        },
        {
          name: 'usuario3',
          image: 'person.png',
        },
        {
          name: 'usuario4',
          image: 'person2.png',
        },
        {
          name: 'usuario5',
          image: 'person.png',
        },
        {
          name: 'usuario6',
          image: 'person2.png',
        },
        {
          name: 'usuario7',
          image: 'person.png',
        },
        {
          name: 'usuario8',
          image: 'person2.png',
        },
      ],
    };
  },
  components: {
    HistoryItem,
  },
};
</script>
<style scoped>
  .histories-wrapper {
    display: flex;
    flex-direction: row;
    background: rgba(255,255,255,1);
    border: 1px solid #dbdbdb;
    border: 1px solid rgba(219,219,219,1);
    border-radius: 3px;
    margin-bottom: 24px;
    margin-top: 0;
    padding: 16px 0;
    height: 84px;
    outline: 0;
    overflow-y: hidden;
  }
</style>

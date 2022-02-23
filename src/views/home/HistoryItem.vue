<template>
  <picture class="history-wrapper">
    <profile-image class="profile-image" :image="history.image"></profile-image>
    <p class="history-title">{{history.name}}</p>
  </picture>
</template>
<script>
import ProfileImage from '@/components/ProfileImage.vue';

export default {
  name: 'HistoryItem',
  props: {
    history: {
      type: Object,
      required: true,
    },
  },
  components: {
    ProfileImage,
  },
};
</script>
<style scoped>
  .history-wrapper {
    margin: 0;
    margin: 0 10px;
  }
  p {
    margin: 0;
    font-size: 12px;
    text-align: center;
  }
  .profile-image{
    height: 66px;
    width: 66px;
  }
</style>

.<template>
  <img class="history-image" :src="require('@/assets/images/'+image)" :alt="image">
</template>

<script>
export default {
  name: 'ProfileImage',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.history-image {
    padding:0;
    margin: 0;
    background: linear-gradient(#8a3ab9, #bc2a8d) padding-box,
    linear-gradient(to right, #fccc63, #bc2a8d ) border-box;
  border-radius: 50em;
  border: 2px solid transparent;
  box-sizing: border-box;
  }
</style>

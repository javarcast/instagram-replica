<template>
  <div class="carousel-wrapper">
    <div class="dots">
      <button class="dot-left" @click="prev">
      &#60;
      </button>
      <button class="dot-right" @click="next">
        &#62;
      </button>
    </div>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <history-item v-for="history of cards" :history="history"
        :key="history.name"></history-item>
    </div>
  </div>

  </div>
</template>

<script>
import HistoryItem from '@/views/home/HistoryItem.vue';

export default {
  data() {
    return {
      cards: [],
      innerStyles: {},
      step: '',
      transitioning: false,
    };
  },
  components: {
    HistoryItem,
  },
  props: {
    histories: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.cards = this.histories;
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    changeImage(img) {
      this.$emit('changeImage', img);
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener('transitionend', listener);
      };
      this.$refs.inner.addEventListener('transitionend', listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>

<style scoped>

.carousel-wrapper {
    position: relative;
    width: 100%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2px;
  }
  .dots {
    display:flex;
    justify-content: space-between;
    width: 75%;
    position: absolute;
}

  .dot-left, .dot-right {
    background: white;
    width: 1rem;
    height: 1rem;
    color: black;
    border-radius: 100px;
  }
  .dot-let {
    left:0
  }
.carousel {
  width: 170px;
  overflow: hidden;
}
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
.card {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;
  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>

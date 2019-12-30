<template>
  <div class="status"></div>
</template>

<script>
import ProgressBar from 'progressbar.js';
export default {
  data() {
    return {
      bar: null
    }
  },
  props: ['progress'],
  watch: {
    progress(val) {
      this.bar.animate(val);
    }
  },
  mounted() {
    this.bar = new ProgressBar.Circle(this.$el, {
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6,
      from: { color: '#d6ff82', a: 0 },
      to: { color: '#5aedb4', a: 1 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }
    });
    this.bar.animate(this.progress);
  }
}
</script>


<style scoped>

</style>

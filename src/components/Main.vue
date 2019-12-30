<template>
  <section class="hero is-danger is-fullheight">
    <div class="notification is-warning" v-show="!connectivityStatus">
      <button class="delete"></button>
      {{connectivityText}}
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <status :progress="progress"></status>
              <h1 class="title">{{statusText}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
require('../../node_modules/bulma/css/bulma.css');
import pusher from 'pusher-js';
import Status from '@/components/Status';
export default {
  name: "Main",
  data() {
    return {
      statusText: '',
      progress: 0,
      connectivityText: '',
      connectivityStatus: true,
    }
  },
  created() {
    let pusher = new Pusher('befc1e969f052ccc38af', {
      cluster: 'eu',
      //   encrypted: true
    });
    console.log('asdf')
    let channel = pusher.subscribe('food');
    channel.bind('status', (data) => {
      console.log(data)
      this.statusText = data.message;
      this.progress = data.progress;
    });
  },
  components: {
    'status': Status
  }
}
</script>

<style scoped>

</style>

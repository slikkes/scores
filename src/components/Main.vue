<template>
  <div>
    <section class="is-fullheight">
      <div class="columns is-multiline is-3 " style="padding:20px">
        <div v-for="team in sortedTeams" :class="`column is-4  hero is-${team.color}`">
          <div>
            <h1 class="title">
            {{team.name}}
          </h1>
          </div>
          <div>
            <h1 class="title" style="font-size:128px">
              {{team.score}}
            </h1></div>
        </div>
      </div>
    </section>
    <footer class="footer" style="position:fixed; bottom:0; width:100vw;">
      <div class="content has-text-centered">
        <h1 class="title" style="font-size:64px">
          {{timeRemaining}}
        </h1>
      </div>
    </footer>
  </div>
</template>

<script>
import Api from "../Api";

require ('../../node_modules/bulma/css/bulma.css');
import pusher from 'pusher-js';

export default {
  name: "Main",
  data() {
    return {
      teams: [],
      timeRemaining: ""
    }
  },
  created() {
    this.fetchData ();
    this.countDownTimer();
    let pusher = new Pusher ('befc1e969f052ccc38af', {
      cluster: 'eu',
      //   encrypted: true
    });
    console.log ('asdf')
    let channel = pusher.subscribe ('team');
    channel.bind ('updated', () => {
      this.fetchData ()
    });
  },
  computed: {
    sortedTeams() {
      return this.teams.sort ((a, b) => a.score > b.score ? -1 : 1)
    },
  },
  methods: {
    fetchData() {
      Api ().get ("/teams")
        .then (response => {
          this.teams = response.data
        })
    },
    countDownTimer() {
        setTimeout(() => {
          let hour = 23 - new Date().getHours();
          let min = 59 - new Date().getMinutes();
          let sec = 59 - new Date().getSeconds();

          hour = hour < 10 ? `0${hour}` : hour;
          min = min < 10 ? `0${min}` : min;
          sec = sec < 10 ? `0${sec}` : sec;
          this.timeRemaining = `${hour}:${min}:${sec}`;
          this.countDownTimer()
        }, 1000)
    }
  }
}
</script>

<style scoped>

</style>

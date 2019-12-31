<template>
  <section class="is-fullheight">
    <div class="columns" style="padding:20px">
      <div v-for="team in sortedTeams" :class="`column hero is-${team.color}`" style="margin: 10px">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              {{team.name}}
            </h1>
          </div>
          <div class="column" style="text-align:right">
            <h1 class="title">
              {{team.score}}
            </h1>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Api from "../Api";
require('../../node_modules/bulma/css/bulma.css');
import pusher from 'pusher-js';

export default {
  name: "Main",
  data() {
    return {
      teams: []
    }
  },
  created() {
    Api().get ("/teams")
      .then (response => {
        this.teams = response.data
      })
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
  computed:{
    sortedTeams(){
      return this.teams.sort((a,b)=> a.score > b.score ? -1 : 1)
    },
  },
  components: {
  }
}
</script>

<style scoped>

</style>

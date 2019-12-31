<template>
  <div>
    <section v-for="(team,idx) in teams" :class="`hero is-${team.color}`">

      <div class="hero-body">
        <div class="container">


          <div class="columns">
            <div class="column is-one-thirds">
              <h1 class="title">
                {{team.name}}
              </h1>
              <h3 class="title">
                {{team.score}}
              </h3>
            </div>

            <div class="column is-one-third">
              <div class="field has-addons">
                <div class="control ">
                  <input type="number" class="input is-large" style="max-width: 30vw;" v-model="toAdds[idx]">
                </div>
                <div class="control">
                  <a class="is-large is-info button" @click="addScore(team,toAdds[idx])"><i class="fas fa-plus-square"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Api from "../Api";

export default {
  name: "UpdateScores",
  created() {
    Api().get ("/teams")
      .then (response => {
        this.teams = response.data
      })
  },
  data() {
    return {
      teams: [
      ],
      toAdds: []
    }
  },
  computed: {
    sortedTeams() {
      return this.teams.sort ((a, b) => a.score > b.score ? -1 : 1)
    },
  },
  methods: {
    addScore(team, toAdd) {
      if (Math.abs (toAdd) > 0) {
        team.score += parseInt (toAdd);
        Api().post("update-team", {id:team._id, updateData:{score: team.score}})
        this.toAdds = [];
      }
    },
  },

}
</script>

<style scoped>

</style>

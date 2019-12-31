<template>
  <div>
    <section v-for="team in teams" :class="`hero is-${team.color}`">

      <div class="hero-body">
        <div class="container">


          <div class="columns">
            <div class="column">
              <input v-if="isEdit(team)" type="text" style="font-size: 32px" v-model="team.name">

              <h1 v-else class="title">
                {{team.name}}
              </h1>

            </div>

            <div v-if="isEdit(team)" class="column" style="text-align:right; font-size:64px">
              <a @click="endEdit()"><i class="fas fa-check"></i></a>
            </div>

            <div v-else class="column" style="text-align:right; font-size:64px">
              <a @click="remove(team)"><i class="fas fa-trash-alt"></i></a>
              <a @click="edit(team)"><i class="fas fa-edit"></i></a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section v-if="availableColors.length > 0">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <input type="text" v-model="newTeam.name">
            </div>

            <div  class="column" style="text-align:right; font-size:64px">
              <a @click="saveNew()"><i class="fas fa-save"></i></a>
            </div>

          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Teams",
  data() {
    return {
      colors:["info", "danger", "success", "warning", "black", "white"],
      teams: [
        {
          name: "asdf",
          color: "info",
        },
        {
          name: "ewr",
          color: "danger",
        },
        {
          name: "ewr",
          color: "success",
        },
        {
          name: "asdf",
          color: "warning",
        },
        {
          name: "ewr",
          color: "black",
        },
        {
          name: "ewr",
          color: "white",
        },
      ],
      teamToEdit: {},
      newTeam: {name: "", color: ""}
    }
  },
  computed:{
    availableColors(){
      let usedColors = this.teams.map(item => item.color);
      return this.colors.filter(color => !usedColors.includes(color))
    }
  },
  methods: {
    edit(team) {
      this.teamToEdit = team
    },
    remove(team) {
      this.teams = this.teams.filter (item => item !== team)
    },
    isEdit(team) {
      return this.teamToEdit === team
    },
    endEdit() {
      this.teamToEdit = {}
    },
    saveNew() {
      this.newTeam.color = this.availableColors[0];
      this.teams.push ({name: this.newTeam.name, color: this.newTeam.color})
    },
  }
}
</script>

<style scoped>

</style>

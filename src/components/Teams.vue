<template>
  <div>
    <section v-for="team in teams" :class="`hero is-${team.color}`">

      <div class="hero-body">
        <div class="container">


          <div class="columns">
            <div class="column">
              <h1 class="title">
                {{team.name}}
              </h1>
              <h2 class="subtitle">
                Primary subtitle
              </h2>
            </div>

            <div class="column">
              x
            </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
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
      teams: [
        {
          name: "asdf",
          color: "info"
        },
        {
          name: "ewr",
          color: "danger"
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>

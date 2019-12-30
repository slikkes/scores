<template>
    <div style="margin:50px 100px">
      <button @click="test()">nyom</button>
      {{pressed}}<br>
      {{status}}
    </div>
</template>

<script>
import Api from "../Api";

export default {
  name: "UpdateScores",
  data() {
    return{
      status:1,
      pressed:1
    }
  },
  methods:{
    test() {
      /*pusher.trigger('food', 'status', {
        message: "asdfas",
        progress: 0.33
      });*/
      this.pressed++
      Api().post("test")
      .then(()=>{
        this.status++
      })
    },
  }
}
</script>

<style scoped>

</style>

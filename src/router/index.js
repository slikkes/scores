import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UpdateScores from "../components/UpdateScores";
import Main from "../components/Main";
import Teams from "../components/Teams";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/update-scores',
      name: 'Update',
      component: UpdateScores
    },

    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },

  ]
})

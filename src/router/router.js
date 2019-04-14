import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/History',
      name: 'History',
      component: History
    }
  ]
})
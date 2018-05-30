import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '../pages/homeIndex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeIndex
    }
  ]
})

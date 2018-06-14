import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '../pages/homeIndex.vue'
import ArticlePage from '../pages/articlePage.vue'
import TagsPage from '../pages/tagsPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeIndex
    },
    {
      path: '/article',
      component: ArticlePage
    },
    {
      path: '/tags',
      component: TagsPage
    }
  ]
})

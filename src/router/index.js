import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import my from '@/components/my/my'
import list from '@/components/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/my',
      name: 'my',
      component: my,
    },
    {
      path: '/list',
      name: 'list',
      component: list,
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import details from '@/components/details'
import lists from '@/components/lists'
import login from '@/components/login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/lists',
      component: lists
    },
    {
      path: '/login',
      component: login
    }
  ]
})

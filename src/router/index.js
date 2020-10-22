import Vue from 'vue'
import Router from 'vue-router'


import blacklist from './modules/blacklist'




Vue.use(Router)
export const homeRouter=[
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home'),
      meta:{name:"主页"}
    },
  ];
let routes = new Set([...homeRouter,...blacklist]);
export default new Router({
  routes: routes
})

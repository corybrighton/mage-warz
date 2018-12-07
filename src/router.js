import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Auth from './views/Auth.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Spellbook/:id',
      name: 'Spellbook',
      // route level code-splitting
      // this generates a separate chunk (SpellBook.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "SpellBook" */ './views/SpellBook.vue')
      }
    },
    {
      path: '/account',
      name: 'auth',
      component: Auth
    }
  ]
})

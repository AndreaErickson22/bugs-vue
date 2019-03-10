import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:id',
      props: true,
      name: 'details',
      component: Details
    }, {
      path: '*',
      redirect: '/'
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.


  ]
})

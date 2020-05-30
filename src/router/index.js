import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Survey from '../views/Survey.vue'
import Result from '../views/Result.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  },

  {
    path: '/result',
    name: 'Result',
    component: Result
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
  
})

export default router

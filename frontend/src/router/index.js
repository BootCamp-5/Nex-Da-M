// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/loginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/movie',
      name: 'MovieIndexPage',
      component: MovieIndexPage
    },
    {
      path: '/movie/:id',
      name: 'MovieShowPage',
      component: MovieShowPage
    }
  ]
})

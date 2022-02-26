import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/Login.vue'
import Home from '../components/Home/Home.vue'
import UserList from '../components/UserList/UserList.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/UserList',
    name: 'UserList',
    component: UserList
  }
]

const router = new VueRouter({
  routes
})

export default router

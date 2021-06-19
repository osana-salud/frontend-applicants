import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const SearchUserGitHub = () => import('@/views/SearchUserGitHub/Searchuser.vue');
const SearchUserGitlab = () => import('@/views/SearchUserGitLab/Searchuser.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/github/:id',
    name: 'SearchUserGitHub',
    props: true,
    component: SearchUserGitHub
  },
  {
    path: '/gitlab/:id',
    name: 'SearchUserGitlab',
    component: SearchUserGitlab,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

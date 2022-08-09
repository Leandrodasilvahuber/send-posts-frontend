import cookie from 'cookiejs'
import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateUserView from '../views/CreateUserView.vue'
import LoginUserView from '../views/LoginUserView.vue'
import AboutView from '../views/AboutView.vue'
import ListPostsView from '../views/ListPostsView'
import CreatePostView from '../views/CreatePostView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ListPostsView,
  },
  {
    path: '/login-user',
    component: LoginUserView,
  },

  {
    path: '/create-post',
    component: CreatePostView,
  },
  {
    path: '/create-user',
    component: CreateUserView,
  },

  {
    path: '/about',
    component: AboutView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const token = cookie('token') || null

  if (token && from.path === '/' && to.path === '/login-user') return next('/')
  if (!token && to.path === '/') return next('/login-user')

  if (!token && to.path === '/about') return next('/login-user')
  if (!token && to.path === '/create-post') return next('/login-user')
  if (!token && to.path === '/create-post') return next('/login-user')

  return next()
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import Favorites from "@/views/Favorites"
import New from "../views/New.vue"
import Edit from "../views/Edit.vue"
import Login from "../views/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites/',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: Recipe
  },
  {
    path: '/edit/recipe/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/recipes/new',
    name: 'New Recipe',
    component: New
  },
  {
    path: '/login/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/About/About";
import Home from "../views/Home/Home";
import Add from "../views/Add/Add"
import Details from "../views/Details/Details";
import Update from "../views/Update/Update";


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
    {
    path:'/about',
    component:About
  },
  {
    path:'/add',
    component:Add,
  },
  {
    path:'/details',
    component:Details,
  },
  {
    path:'/update',
    component:Update,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

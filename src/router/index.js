import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import New from  '../components/New'
import Modify from "@/components/Modify";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home,
  },
  {
    path:'/create',
    component:New,
  },
  {
    path:'/modify/:id(\\d+)',
    component:Modify
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

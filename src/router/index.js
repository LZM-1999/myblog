import Vue from 'vue'
import VueRouter from 'vue-router'

const App =()=>import('../App.vue')
const Index =()=>import('../views/index.vue')
const Main =()=>import('../views/index/Main.vue')
const art_Inf_Man =()=>import('../views/index/Main/art_Inf_Man.vue')
const DataVisualization =()=>import('../views/index/Main/DataVisualization.vue')
const InfoExamine =()=>import('../views/index/Main/InfoExamine.vue')
const login =()=>import('../views/login/login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/App',
    component:App,
    children:[
      {
        path:'/index',
        component:Index,
        children:[
          {
            path:'/indexApp',
            component: Main,
            children:[
              {
                path:'/indexApp/art_Inf_Man',
                component:art_Inf_Man
              },
              {
                path:'/indexApp/DataVisualization',
                component:DataVisualization
              },
              {
                path:'/indexApp/InfoExamine',
                component:InfoExamine
              }
            ]
          },
        ]
      },
      {
        path:'/login',
        component:login
      },
    ]
  },
  {
    path:'/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode:"history",
  base:process.env.BASE_URL,
  routes,
})

export default router

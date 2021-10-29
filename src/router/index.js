import Vue from 'vue'
import VueRouter from 'vue-router'

// 后台
const App =()=>import('../App.vue')
const Index =()=>import('../views/back_end_index/index.vue')
const Main =()=>import('../views/back_end_index/Main.vue')
const art_Inf_Man =()=>import('../views/back_end_index/Main/art_Inf_Man.vue')
const DataVisualization =()=>import('../views/back_end_index/Main/DataVisualization.vue')
const InfoExamine =()=>import('../views/back_end_index/Main/InfoExamine.vue')
const login =()=>import('../views/login/login.vue')

// 前台
const frontindex =()=>import('../views/front_end_index/frontindex.vue')
const original =()=>import('../views/front_end_index/original.vue')
const indexmain=()=>import('../views/front_end_index/Main/indexmain.vue')


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
            redirect: '/indexApp/art_Inf_Man',
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
      //登录路由
      {
        path:'/login',
        component:login
      },
      //前台路由
      {
        path:'/frontindex',
        component:frontindex,
        redirect: '/indexmain',
        children:[
          {
            path:'/original',
            component:original
          },
          {
            path:'/indexmain',
            component:indexmain
          }
        ]
        
      },
    ]
  },
  {
    path:'/',
    redirect: '/frontindex'
  },
  
]

const router = new VueRouter({
  mode:"history",
  base:process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if(window.sessionStorage.getItem('token') || to.path==='/login'){
    next()
  }else{
    next({
      path:'/login',
      query:{redirect: to.fullPath}
    })
  }
  
})
export default router

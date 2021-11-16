import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '../flexible'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'

Vue.prototype.$message=Message
Vue.use(axios)
Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.baseURL = 'http://47.243.248.226:5000';




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

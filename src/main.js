import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.prototype.myroot = 'http://192.168.0.33:8080/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

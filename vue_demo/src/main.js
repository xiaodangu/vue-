import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
import './style/base.css'
// 引入vant.editorconfig
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import requestUrl from '@/ajax/requestUrl.js'
Vue.prototype.$requestUrl = requestUrl

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

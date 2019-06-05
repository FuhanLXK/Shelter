import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.use(axios);

Vue.config.productionTip = true

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

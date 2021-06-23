import Vue from 'vue'
import App from './App.vue'
import "./assets/styles/reset.css"
import "./assets/styles/baskan.scss"


Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

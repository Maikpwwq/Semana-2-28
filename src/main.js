import Vue from "vue";
import App from "./App.vue";

// Almacenamiento Local 
import store from './store'
// API
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

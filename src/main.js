import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore';
import router from '@/router';

Vue.use(VueFirestore, {key: 'id'});   
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

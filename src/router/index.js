import Vue from 'vue';
import VueRouter from 'vue-router';

import Principal from '@/components/Principal.vue';
import infoShow from '@/components/infoShow.vue';
import NotFound from '@/components/NotFound.vue';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
        path: '/', 
        component: Principal,
        props: true,
      },
      {        
        path:'/infoShow/:id',
        component: infoShow,
        name: 'infoShow',
        props: true

      },

      {
        path: '*', 
        component: NotFound
      }
    ]
  })
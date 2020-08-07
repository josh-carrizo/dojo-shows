import Vue from 'vue';
import VueRouter from 'vue-router';

import Principal from '@/components/Principal.vue';
import infoShow from '@/components/infoShow.vue';
import ActionShow from '@/components/ActionShow.vue';
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
        path:'/ActionShow/:id/edit',
        component: ActionShow,
        name: 'ActionShow',
        props: true
      },
      {
        path: '*', 
        component: NotFound
      }
    ]
  })
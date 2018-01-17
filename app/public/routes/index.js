'use strict';

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


import Main from '../components/Main.vue';


export default new Router({
  routes: [{
      path: '/',
      redirect: '/main'
    },
    {
      path:'/main',
      component: Main
    }
  ]
})
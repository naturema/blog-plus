'use strict';

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


import Welcome from '../components/Welcome.vue';
import Main from '../components/Main.vue';
import TitleList from '../components/TitleList.vue';

export default new Router({
  routes: [{
      path: '/',
      redirect: '/welcome'
    },
    {
      path:'/welcome',
      component: Welcome
    },
    {
      path:'/main',
      component:Main,
      children:[{
        path: '/',
        component: TitleList
      },{
        path:'/test',
        component:Welcome
      }]
    }
  ]
})
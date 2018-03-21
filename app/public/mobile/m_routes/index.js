import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Main from '../m_components/Main.vue';
import List from '../m_components/List.vue';


export default new Router({
  routes: [{
    path: '/',
    component: Main,
    children: [{
      path: '/',
      component: List,
    }],
  }],
});

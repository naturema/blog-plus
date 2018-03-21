import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Main from '../m_components/Main.vue';
import List from '../m_components/List.vue';
import Tagview from '../m_components/Tagview.vue';
import DateView from '../m_components/DateView.vue';
import About from '../m_components/About.vue';
import Page from '../m_components/Page.vue';


export default new Router({
  routes: [{
    path: '/',
    component: Main,
    children: [{
      path: '/',
      component: List,
    }, {
      path: '/m_tag',
      component: Tagview,
    }, {
      path: '/m_date',
      component: DateView,
    }, {
      path: '/page/:id',
      component: Page,
    }, {
      path: '/m_about',
      component: About,
    }],
  }],
});

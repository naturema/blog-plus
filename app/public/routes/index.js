
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


import Welcome from '../components/Welcome.vue';
import Main from '../components/Main.vue';
import TitleList from '../components/TitleList.vue';
import About from '../components/About.vue';
import Tagview from '../components/Tagview.vue';
import Dateview from '../components/Dateview.vue';
import Page from '../components/Page.vue';


export default new Router({
  routes: [{
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    component: Welcome,
  },
  {
    path: '/main',
    component: Main,
    children: [{
      path: '/',
      component: TitleList,
    }, {
      path: '/tag',
      component: Tagview,
    }, {
      path: '/date',
      component: Dateview,
    }, {
      path: '/page/:id',
      component: Page,
    }, {
      path: '/about',
      component: About,
    }],
  },
  ],
});

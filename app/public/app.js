'use strict';

import Vue from 'vue'
import App from './components/App.vue'
import router from './routes/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



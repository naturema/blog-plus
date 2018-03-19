
import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import router from './routes/index';
import iView from 'iview';
import store from './store';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});


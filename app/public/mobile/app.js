import Vue from 'vue';
import Vuex from 'vuex';
import App from './m_components/App.vue';
import router from './m_routes/index';
import store from '../store';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
Vue.use(Vuex);

new Vue({
  el: '#mobile_app',
  store,
  router,
  render: h => h(App),
});


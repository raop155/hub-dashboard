import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const moment = require('moment');
require('moment/locale/es');
Vue.use(require('vue-moment'), { moment });

new Vue({
  render: h => h(App),
}).$mount('#app');

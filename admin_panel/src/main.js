import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/assets/css/mystyle.css';
import '@/assets/css/media-hover-effects.css';
import '@/assets/css/animate.css';

Vue.use(VueSweetalert2);
Vue.prototype.$Api_url_media = 'http://localhost:3000';
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

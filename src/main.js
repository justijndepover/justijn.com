import Vue from 'vue';
import App from './pages/App.vue';
import router from './router';
import './assets/css/style.css';

Vue.config.devtools = false;
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');

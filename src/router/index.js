import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../pages/404.vue';

Vue.use(Router);

Vue.router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'home',
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            path: '*',
            component: NotFound,
        },
    ],
});

export default Vue.router;

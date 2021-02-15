import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Tools from '../pages/Tools.vue';
import Keylogger from '../pages/tools/Keylogger.vue';
import Timestamp from '../pages/tools/Timestamp.vue';
import ImageGenerator from '../pages/tools/ImageGenerator.vue';
import Encoding from '../pages/tools/Encoding.vue';
import NotFound from '../pages/404.vue';

Vue.use(Router);

Vue.router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'tools',
            path: '/tools',
            component: Tools,
        },
        {
            name: 'keylogger',
            path: '/tools/keylogger',
            component: Keylogger,
        },
        {
            name: 'timestamp',
            path: '/tools/timestamp',
            component: Timestamp,
        },
        {
            name: 'image-generator',
            path: '/tools/image-generator',
            component: ImageGenerator,
        },
        {
            name: 'base64',
            path: '/tools/base64',
            component: Encoding,
        },
        {
            path: '*',
            component: NotFound,
        },
    ],
});

export default Vue.router;

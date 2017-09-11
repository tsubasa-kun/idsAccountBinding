import index from './pages/index/index.vue';
import userHome from './pages/userHome/userHome.vue';
export default {
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/userHome',
            component: userHome
        }
    ]
};
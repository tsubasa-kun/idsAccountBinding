import index from './pages/index/index.vue';
import userHome from './pages/userHome/userHome.vue';
import accountBinding from './pages/accountBinding/accountBinding.vue';
export default {
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/userHome',
            component: userHome
        },
        {
            path: '/accountBinding',
            component: accountBinding
        }
    ]
};
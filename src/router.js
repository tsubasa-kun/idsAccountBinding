import index from './pages/index/index.vue';
import userHome from './pages/userHome/userHome.vue';
import accountBinding from './pages/accountBinding/accountBinding.vue';
import unwoundBinding from './pages/unwoundBinding/unwoundBinding.vue';
import changeDefault from './pages/changeDefault/changeDefault.vue';
import addBinding from './pages/addBinding/addBinding.vue';
import bindingFailed from './pages/bindingFailed/bindingFailed.vue';
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
        },
        {
            path: '/unwoundBinding',
            component: unwoundBinding
        },
        {
            path: '/changeDefault',
            component: changeDefault
        },
        {
            path: '/addBinding',
            component: addBinding
        },
        {
            path: '/bindingFailed',
            component: bindingFailed
        }
    ]
};
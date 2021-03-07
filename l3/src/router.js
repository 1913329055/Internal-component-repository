import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: () =>
                import ('./components/Nav'),
        },
        {
            path: '/sel',
            name: 'sel',
            component: () =>
                import ('./components/Sel'),
        },
        {
            path: '/mav',
            name: 'mav',
            component: () =>
                import ('./components/maven1'),
        },



    ]
});
export default router;
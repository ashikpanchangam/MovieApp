import VueRouter from 'vue-router';

let routes = [{
        name: 'home',
        path: '/',
        components: {
            'list-router-view': require('./components/Home.vue')
        }
    },
    {
        name: 'home-category',
        path: '/movies/:category',
        components: {
            'list-router-view': require('./components/MoviesList.vue')
        }
    },
    {
        name: 'movie',
        path: '/movie/:id',
        components: {
            'page-router-view': require('./components/MoviePage.vue')
        },
        beforeEnter: (to, from, next) => {
            if (history.state && history.state.popup && from.name) {
                eventHub.$emit('openMoviePopup', to.params.id, false);
                return;
            }
            next();
        }
    },
    {
        name: 'Error',
        path: '/404',
        components: {
            'page-router-view': require('./components/Error.vue')
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
});

export default router;
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () =>
        import(/* webpackChunkName: "favorites" */ './views/Favorites')
    },
    {
      path: '*',
      component: () =>
        import(/* webpackChunkName: "notFound" */ './views/NotFound')
    }
  ]
});

import VueRouter from 'vue-router';
// app routes
import routeArtists from './page-artists';

const defaultRoute = routeArtists.path;

const router = new VueRouter({
  mode: 'history',
  base: "/app/",
  routes: [
    { path: '/', redirect: defaultRoute },
    routeArtists
  ],
  linkActiveClass: "active"
});

export default router

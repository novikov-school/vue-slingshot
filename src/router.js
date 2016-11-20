import VueRouter from 'vue-router';
// app routes
import routeArtists from './page-artist';

const defaultRoute = routeArtists.path;

const router = new VueRouter({
  mode: 'hash',
  base: "/",
  routes: [
    { path: '/', redirect: defaultRoute },
    routeArtists
  ],
  linkActiveClass: "active"
});

export default router

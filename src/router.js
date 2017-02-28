import VueRouter from 'vue-router';
// app routes
import routes from './pages';

const router = new VueRouter({
  mode: 'hash',
  base: "/",
  routes,
  linkActiveClass: "active"
});

export default router

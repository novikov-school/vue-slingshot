import Vue from "vue";
import VueRouter from 'vue-router';
// app routes
import routes from './pages';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: "/",
  routes,
  linkActiveClass: "active"
});

export default router

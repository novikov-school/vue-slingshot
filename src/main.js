/* eslint-disable no-console, no-undef */
import Vue from "vue";
import VueRouter from 'vue-router';
import {createStore} from "./store";
import router from './router';
import App from './App.vue';

// plugins
Vue.use(VueRouter);

// create store & load state
const store = createStore();

// root component
const main = {
  router,
  store,
  el: '#app',
  render: h => h(App)
};
const vm = new Vue(main);

// verbose debugging
if (typeof window !== "undefined" && window != undefined) {
  Vue.config.devtools = true;
  Vue.config.debug = true;
  window.vue = vm;
  window.Vue = Vue;
}

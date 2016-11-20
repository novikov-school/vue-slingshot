/* eslint-disable no-console, no-undef */
import Vue from "vue";
// plugins
import VueRouter from 'vue-router';
// css & js
import vendor from "./vendor";
//import "./styles/fonts.css";
//import "./styles/animations.css";
// router & store
import {createStore} from "./store";
import router from './router';
const store = createStore();

Vue.use(VueRouter);
//Vue.use(layoutPlugin);
//i18n(Vue);

const main = {
  router: router,
  store: store,
  el: '#app',
  template: '<app></app>'
};
if(__DEV__){
  console.log('Development...');
  main.components = {
    'app': require('./App.vue')
  };
}
else {
  console.log('Production...');
  main.components = {
    'app': require('./App').default
  }
}

// Register our custom key codes
Vue.config.keyCodes = {
  a: 65,
  j: 74,
  k: 75,
  f: 70,
  mediaNext: 176,
  mediaPrev: 177,
  mediaToggle: 179
};
const vm = new Vue(main);

if (typeof window !== "undefined" && window != undefined) {
  Vue.config.devtools = true;
  Vue.config.debug = true;
  window.vue = vm;
  window.Vue = require('vue');
}
if (Vue.config.debug) {
  console.log('Vendor chunk: ' + vendor);
}

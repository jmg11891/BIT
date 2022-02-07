require('./bootstrap');


import Vue from 'vue'
import VueRouter from 'vue-router'


import router from './router';
import store from './store';


const app = new Vue({
    el: '#app',
    router,
    store: store
});

import Vue from 'vue'
import App from './App.vue'
import router from '../router/index'
import store from '../store'

/* eslint-disable no-new */
new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})
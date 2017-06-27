import Vue from 'vue';
import App from './App.vue';
import VueParticles from 'vue-particles';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueParticles);
Vue.use(VueAwesomeSwiper);

new Vue({
    el: '#app',
    template: '<App />',
    components: {
        App
    }
});
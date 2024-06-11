import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue'; // Adjust the path as necessary

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
